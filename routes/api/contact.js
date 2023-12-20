const express = require('express')
const router = express.Router()
const contactUsController = require('../../controller/contactController');

router.route("/contactUs")
    .post(contactUsController.postContactUs)

module.exports = router