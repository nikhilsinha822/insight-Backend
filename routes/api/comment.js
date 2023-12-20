const express = require('express')
const router = express.Router()
const commentController = require('../../controller/commentController')

router.route('comment/:id')
    .get(commentController.getComments)
    .post(commentController.createComment)
    .delete(commentController.deleteComment)
    .put(commentController.editComment)