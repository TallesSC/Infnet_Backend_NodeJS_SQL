const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
  const token = req.body.token || req.query.token;
  console.log('token : ', token);

  if (!token) {
    return res.status(403).json({auth: false, message: 'No token provided'});
  }

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) {
      return res.status(403).json({message: 'Invalid Token'});
    }
    req.user = user;
    next();
  });
}

module.exports = verifyJWT;