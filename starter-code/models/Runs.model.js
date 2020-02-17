const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carrersSchema = new Schema({
    title: String,
    dtstart: String,
    dtend: String,
    link: String,
    "event-location": String
})

module.exports = mongoose.model('Carrers', carrersSchema)