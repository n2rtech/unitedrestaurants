const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const users = require("./routes/api/users");
const roles = require("./routes/roles");
const countries = require("./routes/countries");
const category = require("./routes/category");
const permissions = require("./routes/permissions");
// const membership = require("./routes/membership");
// const coupons = require("./routes/coupons");
const pages = require("./routes/pages");

// Bodyparser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


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

app.use("/api/roles", roles);
app.use("/api/countries", countries);
app.use("/api/categories", category);

app.use("/api/permissions", permissions);
// app.use("/api/membership", membership);
// app.use("/api/coupons", coupons);
app.use("/api/pages", pages);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
