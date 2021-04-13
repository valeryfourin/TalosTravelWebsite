const { Order } = require("../models/models");
const ApiError = require("../error/ApiError");

class OrderController { 
    async create(req, res, next) {
        try {
            const {title, country, description, img, cost, type, activities} = req.body;

            const order = await Order.create({title, country, description, img, cost, type, activities});


            return res.json(order);
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
        let order;
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
        
        return res.json(order);
        
    }

    async getOne(req, res) { 
        const {id} = req.params;
        const order = await Order.findOne(
            {where: {id}}
        );

        return res.json(order);
    }
    
    async delete(req, res) { // доробити метод
        try {
            const {id} = req.params;
            const order = await Order.delete(
                {where: {id}}
            );
            return res.json(order);
        } catch (e) {
        next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new OrderController();