const bcrypt = require('bcrypt');
const saltRound = +process.env.SALT_ROUND;

const encryptPwd = (pwd) => {
  return bcrypt.hashSync(pwd, saltRound);
  // hash
};

const decryptPwd = (hash, realPwd) => {
  return bcrypt.compareSync(realPwd, hash);
  // true / false
};

module.exports = {
  encryptPwd,
  decryptPwd,
};
