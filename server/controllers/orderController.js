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

    async update(req, res) { 
        const {id, status} = req.body;
        Order.update({status: status}, {where: {id: id}}).then(() => {
            res.status(200).json('Order with id = ' + id + ' updated successfully')
        }).catch(err => {
            console.log(err);
            res.status(500).json('We failed to update for the reason: ' + err)
        })
    }

    async delete(req, res) { // доробити метод
        const id = req.params.id;
        // let tour = Tour.build({id: id}, { isNewRecord: false })
        Order.destroy({where: {id: id}}).then(() => {
            return res.status(200).json('Order with id = ' + id + ' removed successfully');
           }).catch((err) => {
            console.log(err);
            return res.status(500).json('We failed to delete for the reason: ' + err);
           }); 
        
    }
}

module.exports = new OrderController();