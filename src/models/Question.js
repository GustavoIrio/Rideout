'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');

class Question extends Model {
  static init(sequelize) {
    super.init({
      content: DataTypes.STRING,
      typeQuestion: DataTypes.STRING,
    }, {
      sequelize
    })
  }
  static associate(models) {
    // define association here
    this.hasMany(models.Answer, { foreignKey: 'idQuestion', as: 'answers' });
  }
}

module.exports = Question;