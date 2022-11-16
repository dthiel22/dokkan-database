const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class CharacterSkill extends Model {}

CharacterSkill.init(
  {
    characterId: {
      type: DataTypes.INTEGER,
      primarykey: true,
      references:{
        model: 'character',
        key: 'id'
      }
    },
    linkSkillId:{
      type: DataTypes.INTEGER,
      primarykey: true,
      references:{
        model: 'link_skill',
        key: 'id'
      }
    }
  },
  {
    sequelize,
  }
);

module.exports = CharacterSkill;
