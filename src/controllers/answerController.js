const Answer = require('../models/Answer');
const User = require('../models/User');

module.exports = {
    
    async listAnswers(req, res) {
        const { uid } = req.body

        try {
            const userInfo = await User.findOne({
                where: {
                    uid: uid
                },
            })

            const answers = await Answer.findAll({
                where: {
                    idUser: userInfo[0].id
                },
            })
            return res.status(200).json(answers);
        } catch (error) {
            return res.status(400).json({
                error: ['Usuário não encontrado!']
            })
        }
    }

}