const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    body:{
        type: String,
        required: true
    },
    dateTime:{
        type: String,
        required: true
    },
    postId:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)