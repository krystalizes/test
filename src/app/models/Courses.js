const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, maxLength: 225 },
        image: { type: String, maxLength: 600 },
        level: { type: String, maxLength: 600 },
        slug: { type: String, slug: 'name', unique: true },
        vidid: { type: String, required: true, maxLength: 225 },
    },
    {
        timestamps: true,
    },
);
module.exports = mongoose.model('Course', Course);
