const express = require('express');
const connection = require('./database/connection');
const usersRoutes = require('./routes/usersRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const authRotues = require('./routes/authRoutes');
const verifyJWT = require("./services/JWT");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/users', verifyJWT, usersRoutes);
app.use('/courses', verifyJWT, coursesRoutes);
app.use('/subscription', verifyJWT, subscriptionRoutes);
app.use('/login', authRotues);
app.use('/logout', authRotues);

connection
  .sync({force: false})
  .then(() => {
    console.log('Database synced');
    app.listen(3333, () => {
      console.log('Server starting');
    });
  })
  .catch((error) => {
    console.error('Error sync:', error);
  });