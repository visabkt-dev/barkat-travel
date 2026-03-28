const { Client } = require('pg');

const client = new Client({
  host: 'aws-1-us-east-1.pooler.supabase.com',
  port: 5432,
  user: 'postgres.oublaakgqdflknupivra',
  password: 'QaoBZUVNX56agTyX',
  database: 'postgres',
  ssl: { rejectUnauthorized: false }
});

async function main() {
  await client.connect();

  // 1. Add score columns to leads
  await client.query(`
    ALTER TABLE leads
      ADD COLUMN IF NOT EXISTS score          SMALLINT DEFAULT 0,
      ADD COLUMN IF NOT EXISTS score_category VARCHAR(10) DEFAULT 'cold';
  `);
  console.log("score + score_category columns added to leads.");

  // 2. Also add to distributed tables
  for (const t of ['transport_trips', 'visa_applications', 'hotel_bookings']) {
    await client.query(`
      ALTER TABLE ${t}
        ADD COLUMN IF NOT EXISTS score          SMALLINT DEFAULT 0,
        ADD COLUMN IF NOT EXISTS score_category VARCHAR(10) DEFAULT 'cold';
    `);
  }
  console.log("Score columns added to all booking tables.");

  // 3. Create the scoring FUNCTION in Postgres
  await client.query(`
    CREATE OR REPLACE FUNCTION calculate_lead_score(
      p_whatsapp       TEXT,
      p_email          TEXT,
      p_travel_date    DATE,
      p_passengers     TEXT,
      p_additional_info TEXT,
      p_details        TEXT
    )
    RETURNS SMALLINT AS $$
    DECLARE
      v_score   SMALLINT := 0;
      v_days    INTEGER;
      v_msg_len INTEGER;
      v_pax     INTEGER;
    BEGIN
      -- +20 Has WhatsApp
      IF p_whatsapp IS NOT NULL AND length(trim(p_whatsapp)) >= 7 THEN
        v_score := v_score + 20;
      END IF;

      -- +10 Has Email
      IF p_email IS NOT NULL AND p_email LIKE '%@%' THEN
        v_score := v_score + 10;
      END IF;

      -- +30 Travel date: <=30 days away (urgent)
      -- +20 Travel date: 31–90 days
      -- +10 Travel date: >90 days
      IF p_travel_date IS NOT NULL THEN
        v_days := (p_travel_date - CURRENT_DATE);
        IF v_days BETWEEN 0 AND 30 THEN
          v_score := v_score + 30;
        ELSIF v_days BETWEEN 31 AND 90 THEN
          v_score := v_score + 20;
        ELSE
          v_score := v_score + 10;
        END IF;
      END IF;

      -- +20 Multiple passengers (>=2)
      IF p_passengers IS NOT NULL THEN
        BEGIN
          v_pax := CAST(regexp_replace(p_passengers, '[^0-9]', '', 'g') AS INTEGER);
          IF v_pax >= 2 THEN
            v_score := v_score + 20;
          END IF;
        EXCEPTION WHEN OTHERS THEN NULL;
        END;
      END IF;

      -- +20 Message detail (>50 chars)
      -- +10 Message detail (>20 chars)
      v_msg_len := GREATEST(
        COALESCE(length(trim(p_additional_info)), 0),
        COALESCE(length(trim(p_details)), 0)
      );
      IF v_msg_len > 50 THEN
        v_score := v_score + 20;
      ELSIF v_msg_len > 20 THEN
        v_score := v_score + 10;
      END IF;

      RETURN LEAST(v_score, 100);
    END;
    $$ LANGUAGE plpgsql IMMUTABLE;
  `);
  console.log("calculate_lead_score() function created.");

  // 4. Trigger function: auto-score on INSERT or UPDATE
  await client.query(`
    CREATE OR REPLACE FUNCTION auto_score_lead()
    RETURNS TRIGGER AS $$
    DECLARE
      v_score SMALLINT;
    BEGIN
      v_score := calculate_lead_score(
        NEW.whatsapp,
        NEW.email,
        CASE WHEN NEW.travel_date ~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'
             THEN NEW.travel_date::DATE ELSE NULL END,
        NEW.passengers,
        NEW.additional_info,
        NULL
      );

      NEW.score          := v_score;
      NEW.score_category := CASE
        WHEN v_score >= 70 THEN 'hot'
        WHEN v_score >= 40 THEN 'warm'
        ELSE                    'cold'
      END;

      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
  `);
  console.log("auto_score_lead() trigger function created.");

  // 5. Attach triggers to all tables
  for (const t of ['leads', 'transport_trips', 'visa_applications', 'hotel_bookings']) {
    await client.query(`
      DROP TRIGGER IF EXISTS trg_auto_score_${t} ON ${t};
      CREATE TRIGGER trg_auto_score_${t}
        BEFORE INSERT OR UPDATE ON ${t}
        FOR EACH ROW EXECUTE FUNCTION auto_score_lead();
    `);
    console.log(`Score trigger installed on ${t}.`);
  }

  // 6. Backfill existing leads with scores
  const { rows: backfillResult } = await client.query(`
    UPDATE leads
    SET
      score = calculate_lead_score(
        whatsapp, email,
        CASE WHEN travel_date ~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'
             THEN travel_date::DATE ELSE NULL END,
        passengers, additional_info, NULL
      ),
      score_category = CASE
        WHEN calculate_lead_score(
          whatsapp, email,
          CASE WHEN travel_date ~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'
               THEN travel_date::DATE ELSE NULL END,
          passengers, additional_info, NULL
        ) >= 70 THEN 'hot'
        WHEN calculate_lead_score(
          whatsapp, email,
          CASE WHEN travel_date ~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'
               THEN travel_date::DATE ELSE NULL END,
          passengers, additional_info, NULL
        ) >= 40 THEN 'warm'
        ELSE 'cold'
      END
    RETURNING id, score, score_category;
  `);
  console.log(`Backfilled ${backfillResult.length} existing leads with scores.`);

  // 7. Index for fast sorting / filtering by score
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_leads_score ON leads (score DESC);
    CREATE INDEX IF NOT EXISTS idx_leads_score_cat ON leads (score_category);
  `);
  console.log("Indexes created on score columns.");

  await client.end();
  console.log("\n✅ Lead Scoring System fully configured.");
}

main().catch(err => { console.error(err); process.exit(1); });
