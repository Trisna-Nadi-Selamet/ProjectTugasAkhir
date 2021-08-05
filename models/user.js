'use strict';
const { Model } = require('sequelize');
const { encryptPwd } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item);
      User.hasMany(models.Blog);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'email must not be empaty!',
          },
          isEmail: {
            message: 'email must be mail formated!',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'pwd must not be empaty!',
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'image must not be empaty!',
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(users, option) {
          users.password = encryptPwd(users.password);
        },
      },
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
