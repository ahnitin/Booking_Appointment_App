const db = require("mysql2");
const Sequelize = require('sequelize');

const sequelize = new Sequelize('happy_world', 'root', 'good@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;