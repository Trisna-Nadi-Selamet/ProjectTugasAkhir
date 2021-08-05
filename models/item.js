'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.User);
      Item.belongsTo(models.Type);
    }
  }

  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'Name must not be empty!',
          },
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: 'stock must not be empty!',
          },
        },
      },

      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: 'price must not be empty!',
          },
          isNumeric: {
            message: 'price must not be empty!',
          },
        },
      },

      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'image must not be empty!',
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'Category must not be empty!',
          },
        },
      },
      UserId: DataTypes.INTEGER,
      TypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Item',
    }
  );
  return Item;
};
