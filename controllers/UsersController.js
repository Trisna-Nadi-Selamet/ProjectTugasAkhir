const { User } = require('../models');
const { decryptPwd } = require('../helpers/bcrypt');
const { tokenGenerator } = require('../helpers/jwt');
class UsersController {
  static async listUsers(req, res) {
    try {
      let user = await User.findAll({
        order: [['id', 'ASC']],
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async addUsers(req, res) {
    let { email, password, image } = req.body;
    try {
      let Users = await User.create({
        email,
        password,
        image,
      });
      res.status(200).json(Users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateUsers(req, res) {
    try {
      const id = +req.params.id;
      let { email, password, image } = req.body;
      let result = await User.update(
        {
          email,
          password,
          image,
        },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 1) {
        res.status(200).json({
          message: 'id ' + id + ' Succses Updated Id New!',
        });
      } else {
        throw {
          message: 'Failed To Updated!',
        };
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteUsers(req, res) {
    const id = +req.params.id;
    try {
      User.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: 'Id ' + id + ' Succses Delete Id !',
      });

      res.status(200).json();
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async register(req, res) {
    const { email, password, image } = req.body;
    try {
      let users = await User.findOne({
        where: {
          email,
        },
      });
      if (users) {
        res.status(401).json({
          message: 'email alredy exist',
        });
      } else {
        let users = await User.create({
          email,
          password,
          image,
        });
        res.status(200).json(users);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async login(req, res) {
    const { email, password } = req.body;
    try {
      let userCheck = await User.findOne({
        where: {
          email,
        },
      });
      if (userCheck) {
        if (decryptPwd(userCheck.password, password)) {
          let access_token = tokenGenerator(userCheck);
          res.status(200).json({ access_token });
        } else {
          res.status(401).json({
            message: 'invalid password!',
          });
        }
      } else {
        res.status(404).json({
          message: 'user not found!',
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = UsersController;
