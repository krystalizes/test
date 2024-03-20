const mongoose = require('mongoose');
const { types } = require('node-sass');
const Schema = mongoose.Schema;
const Course = new Schema({
    name: { type: String },
    description: { type: String, maxLength: 225 },
    image: { type: String, maxLength: 600 },
    date: { type: String, maxLength: 225 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Course', Course);
