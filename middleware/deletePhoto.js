const cloudinary = require("cloudinary")

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const deleteImage = async (imgId) => {
    cloudinary.v2.uploader.destroy(imgId, function (error, result) {
        console.log(result, error)
    })
        .then(resp => console.log(resp))
        .catch(_err => console.log("Something went wrong, please try again later."));
}

module.exports = 
    deleteImage

