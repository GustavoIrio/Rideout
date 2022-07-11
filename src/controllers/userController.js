const User = require('../models/User')

module.exports = {
    async create(req, res) {

        const { name, email, isAdmin, uid } = req.body;

        const user = await User.create({ name, email, isAdmin, uid });

        return res.json(user);
    }
};