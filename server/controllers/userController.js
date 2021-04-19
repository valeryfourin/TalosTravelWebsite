const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Account} = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )

};

class UserController {
    async registration(req, res, next) {
        const {email, password, role, previousOrders} = req.body;
        if (!email || !password ) {
            return next(ApiError.badRequest('Wrong email or password')); 
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exists'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword, previousOrders});
        const account = await Account.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role, user.previousOrders);
        
        
        return res.json({token});
    }

    async getUsers(req, res, next) {

        let {email} = req.query;
        let users;
        if (email) {
            users = await User.findAll({where: {email}});
        } else { 
            users = await User.findAll();
        }

        return res.json(users);
    }

    async getOneUser(req, res) { 
        const {id} = req.params;
        const user = await User.findOne(
            {where: {id}}
        );

        return res.json(user);
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
        const token = generateJwt(user.id, user.email, user.role, user.previousOrders);
        
        return res.json({token});
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role, req.user.previousOrders);
        return res.json({token});
    }

    async update(req, res, next) {
        const {id, prevOrders} = req.body;
        User.update({previousOrders: prevOrders}, {where: {id: id}}).then(() => {
            res.status(200).json('User with id = ' + id + ' updated successfully')
        }).catch(err => {
            console.log(err);
            res.status(500).json('We failed to update for the reason: ' + err)
        })
    }
}

module.exports = new UserController()