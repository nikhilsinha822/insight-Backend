const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    datetime:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    imgId:{
        type: String
    }
})

module.exports = mongoose.model('Post', postSchema);