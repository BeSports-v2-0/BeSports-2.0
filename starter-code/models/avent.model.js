const mongoose = require('mongoose')
const Schema = mongoose.Schema



const userSchema = new Schema({
    eventname: String,
    ubication: String,
    time: Number,
})

const User = mongoose.model('Event', userSchema)
module.exports = Event
