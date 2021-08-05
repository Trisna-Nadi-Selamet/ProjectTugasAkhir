'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BlogComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BlogComment.belongsTo(models.Blog);
    }
  }
  BlogComment.init(
    {
      author: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'author must not be empty!',
          },
        },
      },
      BlogId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'BlogComment',
    }
  );
  return BlogComment;
};
