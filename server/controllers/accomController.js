const { Accommodation } = require("../models/models");
const uuid = require('uuid');
const path = require('path');
const ApiError = require("../error/ApiError");

class AccomController {
    async create(req, res, next) {
        try {
            const {type, stars, title, address, description, img, startDate, endDate, nights, price, tourId, availability} = req.body;
            
            const accomodation = await Accommodation.create({type, stars, title, address, description, img, startDate, endDate, nights, price, tourId, availability});


            return res.json(accomodation);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        
        let {stars, type, startDate, nights, page, limit} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit
        let accoms;
        if (!stars && !type && !startDate && !nights) {
            accoms = await Accommodation.findAll({limit, offset});
        }
         if (stars && !type && !startDate && !nights) {
            accoms = await Accommodation.findAll({where:{stars}, limit, offset});
        }
         if (stars && type && !startDate && !nights) {
            accoms = await Accommodation.findAll({where:{stars,type}, limit, offset});
        }
         if (!stars && type && !startDate && !nights) {
            accoms = await Accommodation.findAll({where:{type}, limit, offset});
        }
         if (stars && type && startDate && !nights) {
            accoms = await Accommodation.findAll({where:{stars, type}, limit, offset});
        }
        
         if (stars && type && startDate && nights) {
            accoms = await Accommodation.findAll({where:{stars, type}, limit, offset});
        }
        
        return res.json(accoms);
        
    }

    async getOne(req, res) { 
        const {id} = req.params;
        const accomodation = await Accommodation.findOne(
            {where: {id}}
        );

        return res.json(accomodation);
    }
    
    async delete(req, res) { // доробити метод
        try {
            const {id} = req.params;
            const accomodation = await Accommodation.delete(
                {where: {id}}
            );
            return res.json(accomodation);
        } catch (e) {
        next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new AccomController();