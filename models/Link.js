const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Link extends Model {}

Link.init(
  {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    lvl1_stats:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lvl10_stats:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
  }
);

module.exports = Link;
