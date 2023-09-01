const express = require('express')
const router = express.Router();
const postController = require("../../controller/postController")

router.route('/posts')
    .get(postController.getPosts)
    .post(postController.createPosts)
router.route('/posts/:id')
    .delete(postController.deletePosts)
    .put(postController.updatePosts)

module.exports = router