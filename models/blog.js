'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blog.belongsTo(models.User);
      Blog.hasMany(models.BlogComment);
    }
  }
  Blog.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'title must not be empty!',
          },
        },
      },
      content: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'content must not be empty!',
          },
        },
      },
      author: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'author must not be empty!',
          },
        },
      },
      tags: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'tags must not be empty!',
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'status must not be empty!',
          },
        },
      },
      createAdt: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'date must not be empty!',
          },
          isDate: {
            message: 'date must be mail formated!',
          },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Blog',
    }
  );
  return Blog;
};
