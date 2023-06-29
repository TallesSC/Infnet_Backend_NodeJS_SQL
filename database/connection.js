const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
  'trabalhofinal',
  'root',
  'admininfnet',
  {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
      freezeTableName: true
    }
  });


try {
  sequelize.authenticate();
  console.log('Connection Successfully');
} catch (err) {
  console.log('Connection error');
}

module.exports = sequelize;
