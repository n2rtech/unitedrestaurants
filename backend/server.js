const express = require("express");
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
const vendorcoupons = require("./routes/vendorcoupons");
// const addsmembership = require("./routes/addsmembership");
const menuitems = require("./routes/menuitems");
const adspace = require("./routes/adspace");
const paymentmethods = require("./routes/paymentmethods");
// const membership = require("./routes/membership");
// const coupons = require("./routes/coupons");
const pages = require("./routes/pages");
// const sitesetting = require("./routes/sitesetting");

// Bodyparser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


app.use(express.static(__dirname + '/gallery'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/banner'));


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
app.use("/api/vendor-coupons", vendorcoupons);
// app.use("/api/adds-membership", addsmembership);
app.use("/api/menu-items", menuitems);
app.use("/api/ad-spaces", adspace);
app.use("/api/payment-methods", paymentmethods);
// app.use("/api/membership", membership);
// app.use("/api/coupons", coupons);
app.use("/api/pages", pages);
// app.use("/api/site-settings", sitesetting);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
