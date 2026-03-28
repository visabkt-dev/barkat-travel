import { BRAND_NAME, CONTACT_INFO } from "@/lib/constants";

interface SchemaProps {
  schemaType?: string;
  data?: any;
}

export default function SchemaMarkup({ schemaType = 'TravelAgency', data }: SchemaProps) {
  let schema: any = {};

  if (schemaType === 'TravelAgency') {
    schema = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": BRAND_NAME,
      "image": "https://barkattravel.com/logo.png",
      "@id": "https://barkattravel.com",
      "url": "https://barkattravel.com",
      "telephone": CONTACT_INFO.qatar.phones[0],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": CONTACT_INFO.qatar.phones[0],
        "contactType": "customer service",
        "areaServed": "QA",
        "availableLanguage": ["English", "Arabic", "Urdu"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building 64 Office 5",
        "addressLocality": "Umm Al-Ghawaling, Doha",
        "addressRegion": "Doha",
        "addressCountry": "QA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2854,
        "longitude": 51.5310
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "priceRange": "$$",
      "currenciesAccepted": "QAR, SAR",
      "knowsAbout": [
        "Umrah Visas",
        "Nusuk App Registration",
        "Makkah Hotel Booking",
        "Doha to Makkah Transport",
        "Salwa Border Logistics",
        "GCC Travel"
      ],
      "sameAs": [
        "https://www.facebook.com/barkattraveldoha/",
        "https://www.instagram.com/barkattravel_qatar/",
        "https://twitter.com/barkattravel",
        "https://www.linkedin.com/company/barkattravel",
        "https://www.youtube.com/@barkattravel",
        "https://www.tiktok.com/@barkattravel"
      ]
    };
  } else if (schemaType === 'FAQ' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.map((item: any) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    };
  } else if (schemaType === 'LocalBusiness' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": data.name || BRAND_NAME,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": data.address,
        "addressLocality": data.city,
        "addressCountry": data.country
      },
      "telephone": data.phones[0],
      "url": "https://barkattravel.com",
      "image": "https://barkattravel.com/logo.png",
      "openingHours": data.hours,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": data.rating || "5.0",
        "reviewCount": data.reviewCount || "10"
      },
      "review": data.reviews?.map((r: any) => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "reviewRating": { "@type": "Rating", "ratingValue": r.stars },
        "reviewBody": r.text
      }))
    };
  } else if (schemaType === 'Service' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": data.name,
      "provider": {
        "@type": "TravelAgency",
        "name": BRAND_NAME,
        "url": "https://barkattravel.com",
        "logo": "https://barkattravel.com/logo.png"
      },
      "areaServed": data.areaServed || ["Qatar", "UAE", "Oman", "Pakistan", "Saudi Arabia"],
      "description": data.description,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": data.currency || "QAR",
        "price": data.price || "Contact for Quote"
      }
    };
  } else if (schemaType === 'Blog' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Barkat Travel Official Knowledge Hub",
      "description": "Expert GCC travel insights, Umrah guides, and transport technical specs.",
      "publisher": {
        "@type": "Organization",
        "name": BRAND_NAME,
        "logo": {
          "@type": "ImageObject",
          "url": "https://barkattravel.com/logo.png"
        }
      },
      "blogPost": data.map((post: any) => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.advisor
        },
        "image": post.image,
        "url": `https://barkattravel.com/blog#post-${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
      }))
    };
  } else if (schemaType === 'Article' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.title,
      "description": data.excerpt,
      "image": data.image,
      "datePublished": data.date,
      "author": {
        "@type": "Person",
        "name": data.advisor
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".speakable-headline", ".speakable-summary"]
      },
      "publisher": {
        "@type": "Organization",
        "name": BRAND_NAME,
        "logo": {
          "@type": "ImageObject",
          "url": "https://barkattravel.com/logo.png"
        }
      }
    };
  } else if (schemaType === 'Breadcrumb' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": data.map((item: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  } else if (schemaType === 'AboutPage') {
    schema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "TravelAgency",
        "name": BRAND_NAME,
        "description": "Qatar's best authorized Umrah travel agency and GCC luxury transport provider, specializing in Doha to Makkah routes, Nusuk app assistance, and Saudi tourist visas.",
        "url": "https://barkattravel.com/about",
        "areaServed": ["Qatar", "Saudi Arabia", "UAE", "Oman", "Pakistan"],
        "knowsAbout": ["Umrah packages from Qatar", "Doha to Makkah Bus", "Private GMC Umrah Transport", "Saudi Multiple Entry Visa", "Nusuk App Registration"]
      }
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
