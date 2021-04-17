"use strict";
exports.__esModule = true;
var express_1 = require("express");
var api = express_1.Router();
api.get('/ping', function (req, res) {
    res.send('pong');
});
exports["default"] = api;
