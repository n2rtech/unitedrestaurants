const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const users = require("./routes/api/users");
const roles = require("./routes/roles");
const category = require("./routes/category");
const permissions = require("./routes/permissions");
const membership = require("./routes/membership");

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
app.use("/api/categories", category);

app.use("/api/permissions", permissions);
app.use("/api/membership", membership);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
