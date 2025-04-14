const jwt = require("jsonwebtoken");
const config = require("../utils/config");
const result = require("../utils/result");

function authorization(request, response, next) {
  if (request.url == "/user/register/" || request.url == "/user/login/") {
    next();
  } else {
    const token = request.headers.token;
    if (token) {
      try {
        const payload = jwt.verify(token, config.secret);
        request.headers.userId = payload.userId;
        next();
      } catch (e) {
        response.send(result.createErrorResult("Invalid Token"));
      }
    } 
    else {
      response.send(result.createErrorResult("Token is Missing"));
    }
  }
  
}

module.exports = authorization;
