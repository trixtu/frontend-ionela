const EXTERNAL_DATA_URL = 'https://www.numerologie-consiliere.ro'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
     
     <url>
       <loc>https://www.numerologie-consiliere.ro/despre-mine/cine-sunt</loc>
       <lastmod>2023-10-09T14:38:45-04:00</lastmod>
     </url>
     <url>
       <loc>https://www.numerologie-consiliere.ro/despre-mine/trairile-elei</loc>
       <lastmod>2023-10-09T14:38:45-04:00</lastmod>
     </url>
     <url>
       <loc>https://www.numerologie-consiliere.ro/numerologie/ce-este-numerologia</loc>
       <lastmod>2023-10-08T14:38:49-04:00</lastmod>
     </url>
     <url>
       <loc>https://www.numerologie-consiliere.ro/numerologie/consultatii-numerologice</loc>
       <lastmod>2023-10-02T14:38:45-04:00</lastmod>
     </url>
     <url>
       <loc>https://www.numerologie-consiliere.ro/calculator-numerologic/cifra-destinului</loc>
       <lastmod>2023-10-10T14:38:45-04:00</lastmod>
     </url>
     <url>
       <loc>https://www.numerologie-consiliere.ro/calculator-numerologic/matricea-numerologica</loc>
       <lastmod>2023-10-09T14:38:45-04:00</lastmod>
     </url>
     <url>
       <loc>https://www.numerologie-consiliere.ro/calculator-numerologic/cifra-numelui</loc>
       <lastmod>2023-10-02T14:38:45-04:00</lastmod>
     </url>
     <url>
       <loc>https://www.numerologie-consiliere.ro/consiliere</loc>
       <lastmod>2023-10-01T14:38:45-04:00</lastmod>
     </url>
     <url>
     <loc>https://www.numerologie-consiliere.ro/contact</loc>
     <lastmod>2023-10-03T14:38:45-04:00</lastmod>
   </url>
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(`${EXTERNAL_DATA_URL}/api/products`)
  const posts = await request.json()

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
