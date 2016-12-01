// NOTE: this file is not needed when using MongoDB
var db = require('../config');
var Link = require('../models/link');

var Links = db.createCollection();

Links.model = Link;

module.exports = Links;