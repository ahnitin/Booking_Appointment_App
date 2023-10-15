const sequelize = require("../database/connetor")
const Sequelize = require('sequelize');
const UserData = sequelize.define('UserData', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    emailid: {
      type: Sequelize.STRING,
      unique:true
    },
    phone: {
        type:Sequelize.STRING,
        unique:true
    }
  });

  module.exports = UserData;