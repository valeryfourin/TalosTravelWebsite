const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Account} = require('../models/models');

const generateJwt = (id, email, number, role) => {
    return jwt.sign(
        {id, email, number, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )

};

class UserController {
    async registration(req, res, next) {
        const {email, password, number, role} = req.body;
        if (!email || !password || !number) {
            return next(ApiError.badRequest('Wrong email or password')); // вдосконалити перевірку
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exists'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, number, role, password: hashPassword});
        const account = await Account.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.number, user.role);
        
        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal("User was not found"));
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("Password is not correct"));
        }
        const token = generateJwt(user.id, user.email, user.number, user.role);
        return res.json({token});

    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.number, req.user.role);
        return res.json({token});
    }
}

module.exports = new UserController()