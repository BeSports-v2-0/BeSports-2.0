const mongoose = require('mongoose')
const Schema = mongoose.Schema



const userSchema = new Schema({
    eventname: String,
    ubication: String,
    time: Number,
    profilePicture: {
        name: String,
        path: String
    }
})

const User = mongoose.model('Event', userSchema)
module.exports = Event
