const {Sequelize, DataTypes} = require('sequelize');
const db = require('../database/connection');

const Course = db.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: true
  }
});


module.exports = Course;