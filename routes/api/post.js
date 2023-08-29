const express = require('express')
const router = express.Router();
const postController = require("../../controller/postController")
const jwtCheck = require('../../middleware/auth')

router.route('/posts')
    .get(postController.getPosts)
    .post(jwtCheck, postController.createPosts)
router.route('/posts/:id')
    .delete(jwtCheck, postController.deletePosts)
    .put(jwtCheck, postController.updatePosts)

module.exports = router