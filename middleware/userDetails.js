const axios = require('axios')

const getUserDetails = async (accessToken) =>{
    const userInfo = await axios.get(`${process.env.ISSUER_BASE_URL}userInfo`,{
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    return userInfo
}

module.exports = getUserDetails