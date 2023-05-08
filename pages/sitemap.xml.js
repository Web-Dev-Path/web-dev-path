const EXTERNAL_DATA_URL = 'https://dev.to/api/articles?username=wdp';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.webdevpath.co</loc>
    </url>
    <url>
      <loc>https://www.webdevpath.co/about</loc>
    </url>
    <url>
      <loc>https://www.webdevpath.co/blog</loc>
    </url>
    <url>
      <loc>https://www.webdevpath.co/contact</loc>
    </url>       
    <url>
      <loc>https://www.webdevpath.co/contact</loc>
    </url>   
     ${posts
       .map(({ tag_list }) => {
         return tag_list.map(tag => {
           return `
            <url>
                <loc>${`https://www.webdevpath.co/blog/category/${tag}`}</loc>
            </url> `;
         });
       })
       .join('')} 
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
