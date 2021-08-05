const { Item, Type, User } = require('../models');
const { Op } = require('sequelize');
class ItemsController {
  static async listItems(req, res) {
    try {
      let item = await Item.findAll({
        //   order: [['id', 'ASC']],
        // },
        // {
        include: [User, Type],
      });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async searchItems(req, res) {
    let name = req.params.name;
    try {
      let items = await Item.findAll({
        where: {
          // [op.substring]:
          name,
        },
      });
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async addItems(req, res) {
    let { name, stock, price, image, category, TypeId } = req.body;
    // console.log(req.userData);
    let UserId = +req.userData.id;
    try {
      let items = await Item.create({
        name,
        stock,
        price,
        image,
        category,
        UserId,
        TypeId,
      });
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateItems(req, res) {
    try {
      const id = +req.params.id;
      let { name, stock, price, image, category, TypeId } = req.body;
      let result = await Item.update(
        {
          name,
          stock,
          price,
          image,
          category,
          TypeId,
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
  static async deleteItems(req, res) {
    const id = +req.params.id;
    try {
      Item.destroy({
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
}
module.exports = ItemsController;
