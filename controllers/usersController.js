const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const addUser = async (req, res) => {
  try {
    const {username, password, name, email, age, phoneNumber} = req.body;
    const user = await User.create({
      username,
      password,
      name,
      email,
      age,
      phoneNumber,
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = {getUsers, addUser};