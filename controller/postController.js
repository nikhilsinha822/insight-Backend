const Post = require('../models/post')
const getUserDetails = require('../middleware/userDetails')
const deleteImage = require("../middleware/deletePhoto")

const getPosts = async (req, res) => {
    const post = await Post.find();
    if (!post.length)
        return res.status(201).json({ "message": "No Post found" })

    res.json(post);
}
const createPosts = async (req, res) => {
    if (!req?.headers?.authorization) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    if (!req?.body?.title || !req?.body?.datetime || !req?.body?.body) {
        return res.status(400).json({ message: "Not sufficient information provided" });
    }
    const accessToken = req.headers.authorization.split(' ')[1];
    const user = await getUserDetails(accessToken)
    const { name, nickname, picture, email, sub } = user.data
    const { title, body, datetime, image, imgId } = req.body;
    try {
        const response = await Post.create({
            title,
            body,
            datetime,
            image,
            imgId,
            user: {
                name,
                username: nickname,
                email,
                photo: picture,
                sub: sub.split('|')[1]
            }
        })

        const _id = response._id.toHexString();
        const data = response._doc.user
        res.status(200).json({ _id, user:data});
    }
    catch (err) {
        console.log(err);
    }
}

const updatePosts = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ message: "Not sufficient information provided" });
    }
    const post = await Post.findOne({ _id: req.params.id }).exec();
    if (!post) {
        return res.status(204).json({ message: `NO such Post found` });
    }
    const { title, body, datetime, image, imgId } = req.body;
    post.body = body;
    post.title = title;
    post.datetime = datetime
    if (image) {
        await deleteImage(post.imgId);
        post.image = image
        post.imgId = imgId
    }
    const result = await post.save();
    res.json(result);
}
const deletePosts = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ message: "Not sufficient information provided" });
    }
    const post = await Post.findOne({ _id: req.params.id }).exec();
    await deleteImage(post.imgId);
    if (!post) {
        return res.status(204).json({ message: `NO such Post found` });
    }
    const result = await post.deleteOne({ _id: req.body.id });
    res.json(result);
}

module.exports = {
    getPosts,
    createPosts,
    updatePosts,
    deletePosts
}