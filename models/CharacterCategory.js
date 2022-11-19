const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class CharacterCategory extends Model {}

CharacterCategory.init(
  {
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'character',
        key: 'id',
      },
    },
    category_name:{
      type: DataTypes.STRING,
      references: {
        model: 'link',
        key: 'name',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'character-category',
  }
);

module.exports = CharacterCategory;
