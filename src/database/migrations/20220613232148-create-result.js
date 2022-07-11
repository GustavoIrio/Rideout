'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      questionAnswer: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      scoreTotal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'Users', key:'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idAnswer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'Answers', key:'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Results');
  }
};