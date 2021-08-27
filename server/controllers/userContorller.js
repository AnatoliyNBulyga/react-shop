const ApiError = require('../error/ApiError');

class UserContorller {

    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('Id error'))
        }
        res.json(id);
    }

}

module.exports = new UserContorller();