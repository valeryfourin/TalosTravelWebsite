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

    async update(req, res) { 
        const {id} = req.body;
        Tour.update(req.body, {where: {id: id}}).then(() => {
            res.status(200).json('Tour with id = ' + id + ' updated successfully')
        }).catch(err => {
            console.log(err);
            res.status(500).json('We failed to update for the reason: ' + err)
        })
        return res.json(req.body)
    }
    
    async delete(req, res) { // доробити метод
        const id = req.params.id;
        // let tour = Tour.build({id: id}, { isNewRecord: false })
        Tour.destroy({where: {id: id}}).then(() => {
            return res.status(200).json('Tour with id = ' + id + ' removed successfully');
           }).catch((err) => {
            console.log(err);
            return res.status(500).json('We failed to delete for the reason: ' + err);
           }); 
        
    }
}

module.exports = new TourController();