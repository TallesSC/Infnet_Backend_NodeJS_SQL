const express = require('express');
const connection = require('./database/connection');

const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());


const usersRoutes = require('./routes/usersRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

app.use('/users', usersRoutes);
app.use('/courses', coursesRoutes);
app.use('/subscription', subscriptionRoutes);

connection.sync({force: false})
  .then(() => {
    console.log('Database synced');
    app.listen(3333, () => {
      console.log('Server starting');
    });
  })
  .catch((error) => {
    console.error('Error sync:', error);
  });