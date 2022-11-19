const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class CharacterLink extends Model {}

CharacterLink.init(
  {
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'character',
        key: 'id',
      },
    },
    link_name:{
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
    modelName: 'character-link',
  }
);

module.exports = CharacterLink;
