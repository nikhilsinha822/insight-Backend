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
        required: true
    },
    imgId:{
        type: String,
        required: true
    },
    sub:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema);