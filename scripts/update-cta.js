const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'src', 'app');

// Page-specific CTA content: [heading, description, primaryBtnText, primaryBtnHref]
const pageCTAs = {
  'transport/page.tsx': [
    'Ready to Book Your Transport?',
    'Get a price quote for Doha to Makkah, Madinah, or Riyadh. Comfortable vehicles, professional drivers, competitive rates.',
    'Get Transport Quote', '/get-quote/'
  ],
  'transport/doha-to-makkah/page.tsx': [
    'Book Your Doha to Makkah Journey',
    'Request a quote for your Doha–Makkah transport. Daily departures with comfortable GMC and bus services.',
    'Get Quote Now', '/get-quote/'
  ],
  'transport/doha-to-madinah/page.tsx': [
    'Travel from Doha to Madinah With Ease',
    'Comfortable transport from Doha to Madinah Al Munawwarah. Book your seat today and travel with peace of mind.',
    'Book This Route', '/get-quote/'
  ],
  'transport/doha-to-riyadh/page.tsx': [
    'Doha to Riyadh – Book Your Seat',
    'Direct transport from Doha to Riyadh for individuals and groups. Affordable rates with professional drivers.',
    'Request a Quote', '/get-quote/'
  ],
  'visa/page.tsx': [
    'Need Help With Your Saudi Visa?',
    'Our visa team handles Umrah visas, tourist visas, and transit visas for applicants in Qatar and Pakistan. Fast processing, high success rate.',
    'Apply for Visa', '/get-quote/'
  ],
  'visa/umrah-visa-qatar/page.tsx': [
    'Apply for Umrah Visa from Qatar',
    'We process Umrah visas for Pakistan passport holders in Qatar. Fast approval with full document support.',
    'Start Application', '/get-quote/'
  ],
  'visa/saudi-tourist-visa-qatar/page.tsx': [
    'Get Your Saudi Tourist Visa Today',
    'We assist with Saudi Tourist e-Visa applications for travelers in Qatar. Quick processing and expert guidance.',
    'Apply Now', '/get-quote/'
  ],
  'visa/multiple-entry-visa/page.tsx': [
    'Apply for Saudi Multiple Entry Visa',
    'Frequent Qatar–Saudi travelers can apply for the multiple entry visa through our team. Save time on every trip.',
    'Get Started', '/get-quote/'
  ],
  'visa/transit-visa/page.tsx': [
    'Book Transit Visa Assistance',
    'Our team will guide you through Saudi transit visa requirements and help you apply quickly and correctly.',
    'Apply Now', '/get-quote/'
  ],
  'hotels/page.tsx': [
    'Find the Right Hotel for Your Trip',
    'We help travelers book hotels near Masjid Al-Haram in Makkah and Masjid An-Nabawi in Madinah. Tell us your dates and budget.',
    'Book a Hotel', '/get-quote/'
  ],
  'hotels/makkah-hotel-booking/page.tsx': [
    'Book Your Makkah Hotel Now',
    'We assist pilgrims and travelers in booking hotels close to Masjid Al-Haram. Budget to 5-star options available.',
    'Check Availability', '/get-quote/'
  ],
  'hotels/madinah-hotel-booking/page.tsx': [
    'Find Hotels Near Masjid An-Nabawi',
    'We help you find and book hotels in Madinah close to the Prophet\'s Mosque. Start your inquiry today.',
    'Book Now', '/get-quote/'
  ],
};

let updated = 0;

Object.entries(pageCTAs).forEach(([rel, [heading, description, btnText, btnHref]]) => {
  const filePath = path.join(base, rel);
  if (!fs.existsSync(filePath)) {
    console.log('SKIP (not found):', rel);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('ContactCTA')) {
    console.log('NO ContactCTA found:', rel);
    return;
  }

  // Replace import
  content = content.replace(
    /import ContactCTA from ["']@\/components\/ContactCTA["'];?\r?\n/g,
    `import PageCTA from "@/components/PageCTA";\n`
  );

  // Replace the JSX usage - handle variations like <ContactCTA title="..." /> or <ContactCTA />
  content = content.replace(
    /<ContactCTA[^/]*\/>/g,
    `<PageCTA\n        heading="${heading}"\n        description="${description}"\n        primaryBtn={{ text: "${btnText}", href: "${btnHref}" }}\n        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}\n      />`
  );

  // Handle multiline ContactCTA tags
  content = content.replace(
    /<ContactCTA[\s\S]*?\/>/g,
    `<PageCTA\n        heading="${heading}"\n        description="${description}"\n        primaryBtn={{ text: "${btnText}", href: "${btnHref}" }}\n        secondaryBtn={{ text: "Contact Us", href: "/contact/" }}\n      />`
  );

  fs.writeFileSync(filePath, content);
  console.log('Updated:', rel);
  updated++;
});

console.log(`\nDone! Updated ${updated} pages.`);
