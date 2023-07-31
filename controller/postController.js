const Post = require('../models/post')

const getPosts = async (req,res) => {
    const post = await Post.find();
    if(!post.length)
        return res.status(201).json({"message": "No Post found"})
    res.json(post);
}
const createPosts = async (req,res) => {
    if(!req?.body?.title || !req?.body?.datetime || !req?.body?.body){
        return res.status(400).json({message: "Not sufficient information provided"});
    }
    const {title, body, datetime} = req.body;
    try {
        await Post.create({
            title,
            body,
            datetime
        })
        res.status(200).json({message: "successfully created"});
    }
    catch(err){
        console.log(err);
    }
}
const updatePosts = async(req,res) => {
    if(!req?.body?.id || !req?.body?.title || !req?.body?.datetime || !req?.body?.body){
        return res.status(400).json({message: "Not sufficient information provided"});
    }
    const post = Post.findOne({_id: req.body.id}).exec();
    if(!post){
        return res.status(204).json({message: `NO such Post found`});
    }
    const {title, body, dateTime} = req.body;
    post.body=body;
    post.title=title;
    post.dateTime=dateTime
    const result = await post.save();
    res.json(result);
}
const deletePosts =async (req,res) => {
    if(!req?.body?.id){
        return res.status(400).json({message: "Not sufficient information provided"});
    }
    const post = Post.findOne({_id: req.body.id}).exec();
    if(!post){
        return res.status(204).json({message: `NO such Post found`});
    }
    const result = deleteOne({_id: req.body.id});
    res.json(result);
}

module.exports = {
    getPosts,
    createPosts,
    updatePosts,
    deletePosts
}