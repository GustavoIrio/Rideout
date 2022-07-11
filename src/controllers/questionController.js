const User = require('../models/User');
const Question = require('../models/Question');
const Answer = require('../models/Answer');
const { Sequelize } = require('sequelize');

const createQuestions = async (req, res) => {
    const { content, typeQuestion, answers } = req.body

    try {
        const question = await Question.create({
            'content': content,
            'typeQuestion': typeQuestion,
        })
        const { id } = question
        for (let i = 0; i < answers.length; i++) {
            var answer = await Answer.create({
                'answerScore': 2,
                'answerDescription': answers[i].answer,
                'idQuestion': id
            })
        }
        return res.status(200).json(question);
    } catch (error) {
        return res.status(400).json({
            error: ['Usuário não encontrado!']
        })
    }
};

const getQuestions = async (req, res) => {

    try {
        const questions = await Question.findAll({
            attributes: ['id', 'content'],
            include: {
                association: 'answers',
                attributes: ['answerDescription'],
            },
        })
        return res.status(200).json(questions);
    } catch (error) {
        return res.status(400).json({
            errors: ['Nenhuma question encontrada!']
        })
    }

};
module.exports = { createQuestions, getQuestions }

