const express = require('express');
const answerController = require('./controllers/answerController');
const questionController = require('./controllers/questionController');
const userController = require('./controllers/userController');

const routes = express.Router();

// routes.post('/create', userController.create);
routes.get('/questions', questionController.getQuestions);
routes.post('/questions', questionController.createQuestions);
routes.post('/quizstatus', answerController.listAnswers);

module.exports = routes;