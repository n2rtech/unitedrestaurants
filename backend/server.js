const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const users = require("./routes/api/users");
const roles = require("./routes/roles");
const category = require("./routes/category");
const permissions = require("./routes/permissions");

const keys = require("./config/keys");
const app = express();
//Cookie
app.use(
  cookieSession({
    maxAge:  24 * 60 * 60 * 1000,
    keys: [keys.Cookie]
  })
);
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());


// Routes
app.use("/api/users", users);

app.use("/api/roles", roles);
app.use("/api/categories", category);

app.use("/api/permissions", permissions);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
