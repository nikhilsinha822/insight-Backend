const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
  audience: process.env.API_IDENTIFIER,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: process.env.SIGN_ALGO
});

module.exports=jwtCheck

