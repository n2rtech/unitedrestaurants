import React from 'react';
import './css/style.css'
import XMLViewer from 'react-xml-viewer'

const Sitemap = (props) => {
  var parseString = require('xml2js').parseString;

 const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">



<url>
<loc>https://unitedrestaurants.com/</loc>
<lastmod>2022-01-25T09:20:48+00:00</lastmod>
</url>


</urlset>`;

parseString(xml, function (err, result) {
  console.dir(result);
});

  return (
    <div>
        <XMLViewer xml={xml} /> 
    </div>
  );
}

export default Sitemap;
