const { Tour } = require("../models/models");
const ApiError = require("../error/ApiError");

class TourController {
    async create(req, res, next) {
        try {
            const {title, country, description, img, cost, type, activities} = req.body;
            // const {img} = req.files;
            // let fileName = uuid.v4() + ".jpg";
            // img.mv(path.resolve(__dirname, '..', 'static', filename));

            const tour = await Tour.create({title, country, description, img, cost, type, activities});


            return res.json(tour);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }


    }

    async getAll(req, res) {
        //const tours = await Tour.findAll();
        //return res.json(tours);

        let {country, type, startDate, nights, page, limit} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit
        let tours;
        if (!country && !type && !startDate && !nights) {
            tours = await Tour.findAll({limit, offset});
        }
         if (country && !type && !startDate && !nights) {
            tours = await Tour.findAll({where:{country}, limit, offset});
        }
         if (country && type && !startDate && !nights) {
            tours = await Tour.findAll({where:{country,type}, limit, offset});
        }
         if (!country && type && !startDate && !nights) {
            tours = await Tour.findAll({where:{type}, limit, offset});
        }
         if (country && type && startDate && !nights) {
            tours = await Tour.findAll({where:{country, type}, limit, offset});
        }
        
         if (country && type && startDate && nights) {
            tours = await Tour.findAll({where:{country, type}, limit, offset});
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
        try {
            const {id} = req.params;
            const accomodation = await Tour.delete(
                {where: {id}}
            );
            return res.json(tour);
        } catch (e) {
        next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new TourController();