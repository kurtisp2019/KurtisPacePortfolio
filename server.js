/**
 * 
 *      server.js
 * 
 */

var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, () => { 
    console.log("app listening on port: " + PORT);
});

