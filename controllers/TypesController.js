const { Type } = require('../models');

class TypesController {
  static async listTypes(req, res) {
    try {
      let type = await Type.findAll({
        order: [['id', 'ASC']],
      });
      res.status(200).json(type);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async addTypes(req, res) {
    let { name } = req.body;
    try {
      let Types = await Type.create({
        name,
      });
      res.status(200).json(Types);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async updateTypes(req, res) {
    try {
      const id = +req.params.id;
      let { name } = req.body;
      let result = await Type.update(
        {
          name,
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
  static async deleteTypes(req, res) {
    const id = +req.params.id;
    try {
      Type.destroy({
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
module.exports = TypesController;
