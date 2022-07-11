const {Sequelize} = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');
const Question = require('../models/Question');
const Answer = require('../models/Answer');
const Result = require('../models/Result');

const connection = new Sequelize(dbConfig); //conexão com o BD

User.init(connection);
Question.init(connection);
Answer.init(connection);
Result.init(connection);

Question.associate(connection.models);
Answer.associate(connection.models);
Result.associate(connection.models);


module.exports = connection