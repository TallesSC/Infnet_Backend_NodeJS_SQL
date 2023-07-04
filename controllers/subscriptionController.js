const Course = require('../models/Course');
const Subscription = require('../models/Subscription');
const User = require('../models/User');

const getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.findAll();
    res.json(subscriptions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const addSubscription = async (req, res) => {
  try {
    const {UserId, CourseId} = req.body;

    const user = await User.findByPk(UserId);
    const course = await Course.findByPk(CourseId);

    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }

    if (!course) {
      return res.status(404).json({message: 'Course not found'});
    }

    if (!course.isAvailable) {
      return res.status(404).json({message: 'Course not available'});
    }

    const subscription = await Subscription.create({UserId, CourseId});
    res.json(subscription);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const removeSubscription = async (req, res) => {
  try {
    const {id} = req.body;

    const subscription = await Subscription.findByPk(id);

    if (!subscription) {
      return res.status(404).json({message: 'Subscription not found'});
    }

    subscription.cancelledAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
    await subscription.save();

    res.json(subscription);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = {getSubscriptions, addSubscription, removeSubscription};