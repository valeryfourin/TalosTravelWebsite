const { Accommodation } = require("../models/models");
const uuid = require('uuid');
const path = require('path');
const ApiError = require("../error/ApiError");

class AccomController {
    async create(req, res, next) {
        try {
            const {type, stars, title, address, description, img, price, tourId} = req.body;
            
            const accomodation = await Accommodation.create({type, stars, title, address, description, img, price, tourId});


            return res.json(accomodation);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        
        let {stars, tourId, type, page, limit} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit
        let accoms;
        if (!stars && !type && !tourId) {
            accoms = await Accommodation.findAll();
        }
        if (!stars && !type && tourId) {
            accoms = await Accommodation.findAll({where:{tourId}});
        }
        if (stars && !type && !tourId) {
            accoms = await Accommodation.findAll({where:{stars}});
        }
        if (stars && type && !tourId) {
            accoms = await Accommodation.findAll({where:{stars,type}});
        }
        if (!stars && type && !tourId) {
            accoms = await Accommodation.findAll({where:{type}});
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

    async delete(req, res) { 
        const id = req.params.id;
        Accommodation.destroy({where: {id: id}}).then(() => {
            return res.status(200).json('Accommodation with id = ' + id + ' removed successfully');
           }).catch((err) => {
            console.log(err);
            return res.status(500).json('We failed to delete for the reason: ' + err);
           }); 
        
    }
}

module.exports = new AccomController();