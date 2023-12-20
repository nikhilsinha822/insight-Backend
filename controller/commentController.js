const Comment = require('../models/comment')

const getComments = async (req,res) => {
    if(!req?.params?.id){
        res.status(400).json({message: "request cannot be completed insufficient data"});
    }
    const Comments = await Comment.find({postId: req.params.id}).exec()
    if(!Comments) {
        res.status(204).json({message: "No comments found"});
    }
    res.json(Comments);
}

const createComment = async (req,res) => {
    if(!req?.params?.id || !req?.body?.body || !req?.body?.dateTime || !req?.body?.author){
        res.status(400).json({message: "request cannot be completed insufficient data"});
    }
    const {body, dateTime, author} = req.body;
    const postId = req.params.id;
    try{
        const response = await Comment.create({
            body,
            dateTime,
            author,
            postId
        })
        const id = response._id.toHexString();
        res.status(200).json({id});
    }catch(err){
        console.log(err)
    } 
}

const deleteComment = async (req,res) => {
    if(!req?.params?.id){
        res.json({message: "request cannot be completed insufficient data"})
    }
    const comment = await Comment.findOne({_id: req.params.id}).exec();
    if(!comment){
        res.status(204).json({message: "No such comment found"})
    }
    const result = deleteOne({_id: req.body.id})
    res.json(result); 
}

const editComment = async (req,res) => {
    if(!req?.params?.id){
        res.json({message: "request cannot be completed insufficient data"})
    }
    const comment = await Comment.findOne({_id: req.params.id}).exec();
    if(!comment){
        res.status(204).json({message: "No such comment found"})
    }
    const {body, dateTime} = req.body;
    comment.body=body;
    comment.dateTime = dateTime
    const result = await Comment.save();
    res.json(result);
}

module.exports = {
    getComments,
    createComment,
    deleteComment,
    editComment
}