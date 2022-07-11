'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      uid: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = User;