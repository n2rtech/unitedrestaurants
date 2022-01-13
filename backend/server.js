const express = require("express");
const db = require('./models');
const app = express();
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const users = require("./routes/api/users");
const vendors = require("./routes/api/vendors");
const roles = require("./routes/roles");
const countries = require("./routes/countries");
const category = require("./routes/category");
const gallery = require("./routes/gallery");
const profile = require("./routes/profile");
const permissions = require("./routes/permissions");
const jobopenings = require("./routes/jobopenings");
const videogallery = require("./routes/videogallery");

const youtubevideo = require("./routes/youtubevideo");


const vendorcoupons = require("./routes/vendorcoupons");
const addsmembership = require("./routes/addsmembership");
const menuitems = require("./routes/menuitems");
const saleitems = require("./routes/saleitems");
const blogs = require("./routes/blogs");
const adspace = require("./routes/adspace");
const paymentmethods = require("./routes/paymentmethods");
const membership = require("./routes/membership");
const vendormembership = require("./routes/vendormembership");
const coupons = require("./routes/coupons");
const pages = require("./routes/pages");
const sitesetting = require("./routes/sitesetting");
const hotdeals = require("./routes/hotdeals");
const latestadditions = require("./routes/latestadditions");
const businessadvertises = require("./routes/businessadvertises");
const featuredbusinesses = require("./routes/featuredbusinesses");
const wallet = require("./routes/wallet");
const backup = require("./routes/backup");
// const trash = require("./routes/trash");
const googleadsense = require("./routes/googleadsense");
const accountspayables = require("./routes/accountspayables");
const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))
// Bodyparser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

/*app.use(express.static(__dirname + '/gallery'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/banner'));
*/

// app.use('/banner', express.static(__dirname + '/uploads/banner'));
// app.use('/adspaces', express.static(__dirname + '/uploads/adspaces'));
// app.use('/blogs', express.static(__dirname + '/uploads/blogs'));
// app.use('/gallery', express.static(__dirname + '/uploads/gallery'));
// app.use('/site', express.static(__dirname + '/uploads/site'));
// app.use('/images', express.static(__dirname + '/images'));

app.use("/api/uploads/",express.static('uploads'));

const keys = require("./config/keys");
//Cookie
app.use(
  cookieSession({
    maxAge:  24 * 60 * 60 * 1000,
    keys: [keys.Cookie]
  })
);


// Routes
app.use("/api/users", users);
app.use("/api/vendors", vendors);

app.use("/api/roles", roles);
app.use("/api/countries", countries);
app.use("/api/categories", category);
app.use("/api/gallery", gallery);
app.use("/api/profile", profile);

app.use("/api/permissions", permissions);
app.use("/api/jobs", jobopenings);
app.use("/api/video-gallery", videogallery);

app.use("/api/youtubevideo", youtubevideo);

app.use("/api/vendor-coupons", vendorcoupons);
app.use("/api/adds-membership", addsmembership);
app.use("/api/vendor-membership", vendormembership);
app.use("/api/menu-items", menuitems);
app.use("/api/sale-items", saleitems);
app.use("/api/blogs", blogs);
app.use("/api/ad-spaces", adspace);
app.use("/api/payment-methods", paymentmethods);
app.use("/api/membership", membership);
app.use("/api/coupons", coupons);
app.use("/api/pages", pages);
app.use("/api/site-settings", sitesetting);
app.use("/api/hot-deals", hotdeals);
app.use("/api/latest-additions", latestadditions);
app.use("/api/business-advertises", businessadvertises);
app.use("/api/featured-businesses", featuredbusinesses);
app.use("/api/accounts-payable", accountspayables);
app.use("/api/wallet", wallet);
app.use("/api/backup", backup);
// app.use("/api/trash", trash);
app.use("/api/google-adsense", googleadsense);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
