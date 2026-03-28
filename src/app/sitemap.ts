import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://barkattravel.com'
  const lastModified = new Date()

  const routes = [
    '',
    '/transport',
    '/transport/doha-to-makkah',
    '/transport/doha-to-madinah',
    '/transport/doha-to-riyadh',
    '/visa',
    '/visa/umrah-visa',
    '/visa/tourist-visa',
    '/visa/transit-visa',
    '/visa/multiple-entry-visa',
    '/hotels',
    '/hotels/makkah-hotel-booking',
    '/hotels/madinah-hotel-booking',
    '/hotels/qatar-hotels',
    '/about',
    '/contact',
    '/blog',
    '/location/pakistan',
    '/location/saudi-arabia',
    '/location/oman',
    '/location/uae',
    '/trust-authority',
    '/transport/doha-to-makkah-price-guide',
    '/knowledge-base',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
