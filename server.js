// Dependencies
// =============================================================
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const http = require("http");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =============================================================
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(3000);
