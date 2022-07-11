'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');

class Answer extends Model {
  static init(sequelize) {
    super.init({
      answerScore: DataTypes.INTEGER,
      answerDescription: DataTypes.STRING,
      idQuestion: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
  static associate(models) {
    // define association here
    this.belongsTo(models.Question, { foreignKey: 'idQuestion', as: 'question' });
  }
}

module.exports = Answer;