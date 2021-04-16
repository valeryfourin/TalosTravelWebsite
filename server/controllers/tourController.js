const { Tour } = require("../models/models");
const ApiError = require("../error/ApiError");
const path = require("path");
const uuid = require("uuid");

class TourController {
    async create(req, res, next) {
        try {
            let {title, country, description, cost, type, activities} = req.body;
            const {img} = req.files;
            let filename = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', filename))
            const tour = await Tour.create({title, country, description, img: filename, cost, type, activities});


            return res.json(tour);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }


    }

    async getAll(req, res) {

        let {country, type, startDate, nights} = req.query;
        let tours;
        if (!country && !type && !startDate && !nights) {
            tours = await Tour.findAll();
        }
         if (country && !type && !startDate && !nights) {
            tours = await Tour.findAll({where:{country}});
        }
         if (country && type && !startDate && !nights) {
            tours = await Tour.findAll({where:{country,type}});
        }
         if (!country && type && !startDate && !nights) {
            tours = await Tour.findAll({where:{type}});
        }
         if (country && type && startDate && !nights) {
            tours = await Tour.findAll({where:{country, type}});
        }
         if (country && type && startDate && nights) {
            tours = await Tour.findAll({where:{country, type}});
        }
        
        return res.json(tours);
        
    }

    async getOne(req, res) { 
        const {id} = req.params;
        const tour = await Tour.findOne(
            {where: {id}}
        );

        return res.json(tour);
    }
    
    async delete(req, res) { // доробити метод
        const {id} = req.params;
        const tour = await Tour.findOne(
            {where: {id}}
        );
    //     try {
    //         // const {id} = req.params;
    //         const tour = await Tour.delete(
    //             {data: {id: 69}}
    //         );
    //         return res.json(tour);
    //     } catch (e) {
    //     next(ApiError.badRequest(e.message));
    //     }
    // }
        await tour.destroy();
    }
}

module.exports = new TourController();