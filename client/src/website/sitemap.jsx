import React from 'react';
import './css/style.css'
import XMLViewer from 'react-xml-viewer'

const Sitemap = (props) => {
  var parseString = require('xml2js').parseString;

 const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url> <loc>https://unitedrestaurants.com/</loc> </url>
<url> <loc>https://unitedrestaurants.com/</loc> </url>
<url> <loc>https://unitedrestaurants.com/home</loc> </url>
<url> <loc>https://unitedrestaurants.com/aboutus</loc> </url>
<url> <loc>https://unitedrestaurants.com/contactus</loc> </url>
<url> <loc>https://unitedrestaurants.com/privacypolicy</loc> </url>
<url> <loc>https://unitedrestaurants.com/returnpolicy</loc> </url>
<url> <loc>https://unitedrestaurants.com/customerservices</loc> </url>
<url> <loc>https://unitedrestaurants.com/technicalsupport</loc> </url>
<url> <loc>https://unitedrestaurants.com/login</loc> </url>
<url> <loc>https://unitedrestaurants.com/howitwork</loc> </url>
<url> <loc>https://unitedrestaurants.com/termsofservice</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin</loc> </url>
<url> <loc>https://unitedrestaurants.com/vendor/login</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor</loc> </url>
<url> <loc>https://unitedrestaurants.com/user/login</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user</loc> </url>
<url> <loc>https://unitedrestaurants.com/searchresturent</loc> </url>
<url> <loc>https://unitedrestaurants.com/gallery</loc> </url>
<url> <loc>https://unitedrestaurants.com/aboutus</loc> </url>
<url> <loc>https://unitedrestaurants.com/sales</loc> </url>
<url> <loc>https://unitedrestaurants.com/contactus</loc> </url>
<url> <loc>https://unitedrestaurants.com/verifyEmail</loc> </url>
<url> <loc>https://unitedrestaurants.com/visitors</loc> </url>
<url> <loc>https://unitedrestaurants.com/search/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/restaurants</loc> </url>
<url> <loc>https://unitedrestaurants.com/restaurants/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/restaurants/details/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/resturent/details/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/restaurants/newdetails/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/blog</loc> </url>
<url> <loc>https://unitedrestaurants.com/blog/blogdetails/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/verifiedemail/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/signup</loc> </url>
<url> <loc>https://unitedrestaurants.com/sitemap</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/roleslist/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/trash/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/add-user</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/users-list</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/edit-user/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/adsense</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/manage-pages</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/add-category</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/edit-page/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/categories</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/edit-category/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/all-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/edit-vendor/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/all-membership</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/no-membership</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/suspended-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/featured-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/hot-deals-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/add-space-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/video-membership-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/add-vendor</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/admin-membership-package</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/edit-admin-membership</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/promotions-discount</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/edit-promotions-discount</loc> </url>
<url> <loc>https://unitedrestaurants.com/app/bookmark</loc> </url>
<url> <loc>https://unitedrestaurants.com/app/task</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/vendor-profile</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/my-wallet</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/vendor-membership-package</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/vendor-coupon</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/add-vendor-coupon</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/edit-vendor-coupon/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/vendor-photogallery</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/vendor-videogallery</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/add-video-gallery</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/edit-video-gallery/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/vendor-youtube</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/add-youtube-video</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/job-openings</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/add-job-openings</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/edit-job-openings/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/payment-method/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/adds-membership</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/ad-spaces</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/menu-items/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/vendor/sale-items/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/accounts-payable</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/edit-payable/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/add-payable</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/countries</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/contact-enquiries</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/add-countries</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/edit-countries/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/view-contact-inquiry/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/blogs</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/add-blog</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/admin/edit-blog/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/roleslist/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/trash/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/backup/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/add-user</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/users-list</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-user/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/adsense</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/manage-pages</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/add-category</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-page/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/categories</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-category/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/all-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-vendor/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/all-membership</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/no-membership</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/suspended-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/featured-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/hot-deals-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/add-space-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/video-membership-vendors</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/add-vendor</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/admin-membership-package</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-admin-membership</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/promotions-discount</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-promotions-discount</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/vendor-profile</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/my-wallet</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/vendor-membership-package</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/vendor-coupon</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/add-vendor-coupon</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-vendor-coupon/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/vendor-photogallery</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/vendor-videogallery</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/add-video-gallery</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-video-gallery/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/job-openings</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/add-job-openings</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-job-openings/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/payment-method/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/adds-membership</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/ad-spaces</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/menu-items/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/sale-items/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/accounts-payable</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-payable/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/add-payable</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/countries</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/add-countries</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-countries/:id</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/blogs</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/add-blog</loc> </url>
<url> <loc>https://unitedrestaurants.com/dashboard/user/edit-blog/:id</loc> </url>
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
