const {DataTypes} = require('sequelize');
const db = require('../database/connection');

const User = require('../models/User');
const Course = require('../models/Course');

const Subscription = db.define('Subscription', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cancelledAt: {
    type: DataTypes.DATE,
    allowNull: true,
    default: null
  }
});

Subscription.belongsTo(User);
Subscription.belongsTo(Course);

module.exports = Subscription;