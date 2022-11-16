const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class LinkSkill extends Model {}

LinkSkill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'link_skill',
  }
);

module.exports = LinkSkill;
