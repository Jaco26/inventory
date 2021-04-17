"use strict";
exports.__esModule = true;
var path_1 = require("path");
var express_1 = require("express");
var route_1 = require("./route");
var PORT = process.env.PORT || 3500;
var app = express_1["default"]();
app.use(express_1["default"].static(path_1["default"].resolve('dist/client')));
app.use('/api', route_1["default"]);
app.listen(PORT, function () {
    console.log('Server listening on port', PORT);
});
// tsc ./src/server/server.ts --target esnext --outfile dist/server.js
