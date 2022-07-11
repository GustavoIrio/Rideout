'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');

class Result extends Model {
  static init(sequelize) {
    super.init({
      questionAnswer: DataTypes.CHAR,
      scoreTotal: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
      idAnswer: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
  static associate(models) {
    // define association here
    this.belongsTo(models.User, { foreignKey: 'idUser', as: 'user' });
    this.belongsTo(models.Answer, { foreignKey: 'idAnswer', as: 'answer' });
  }
}

module.exports = Result;