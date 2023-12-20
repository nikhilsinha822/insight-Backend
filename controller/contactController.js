const Contact = require('../models/contact')

const postContactUs = async (req,res) => {
    const {name, email, message} = req?.body;
    if(!name || !email || !message){
        res.status(400).json({"message": "Incomplete Data"})
    }
    try{
        await Contact.create({
            name,
            email,
            message
        })
        res.status(200).json({"message": "Thank You!!! Successfully received your message"})
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    postContactUs
}