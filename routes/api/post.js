const express = require('express')
const router = express.Router();
const postController = require("../../controller/postController")

router.route('/posts')
    .get(postController.getPosts)
    .post(postController.createPosts)
    .delete(postController.deletePosts)
    .put(postController.updatePosts)

module.exports = router