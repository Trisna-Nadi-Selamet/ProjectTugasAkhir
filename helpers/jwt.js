const jwt = require('jsonwebtoken');
const secretKey = 'something'; //process.env.SECRET_KEY

const tokenGenerator = (user) => {
  const { id, image, email } = user;
  let token = jwt.sign(
    {
      id,
      image,
      email,
    },
    secretKey
  );
  return token;
};

const tokenVerifier = (token) => {
  let decoded = jwt.verify(token, secretKey);
  return decoded;
};
module.exports = {
  tokenGenerator,
  tokenVerifier,
};
