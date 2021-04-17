const { Order } = require("../models/models");
const ApiError = require("../error/ApiError");

class OrderController { 
    async create(req, res, next) {
        try {
            const {tourId, userId, nights, startDate, endDate, numberOfPeople, totalPrice} = req.body;
            const order = await Order.create({tourId, userId, nights, startDate, endDate, numberOfPeople, totalPrice});

            return res.json(order);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        //const tours = await Tour.findAll();
        //return res.json(tours);

        let {status, userId, page, limit} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit
        let orders;
        if (status) {
            orders = await Order.findAll({where:{status}});
        } else if (userId) {
            orders = await Order.findAll({where:{userId}});
        } else {
            orders = await Order.findAll();
        }
        
        return res.json(orders);
        
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