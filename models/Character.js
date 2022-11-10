const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    char_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rarity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dokkan_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ls_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ls_description_eza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sa_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sa_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sa_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sa_description_eza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ultra_sa_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ultra_sa_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ultra_sa_description_eza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ps_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ps_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ps_description_eza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sa_type_active: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active_skill_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active_skill: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active_skill_condition: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active_skill_condition_eza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transform_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transform_condition: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transform_condition_eza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jp_date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    glb_date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jp_date_eza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    glb_date_eza: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'character',
  }
);

module.exports = Character;
