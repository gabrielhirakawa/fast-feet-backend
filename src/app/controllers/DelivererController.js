import Deliverer from '../models/Deliverer';

class DelivererController{
    async store(req, res){

        const { id, name, avatar_id, email } = await Deliverer.create(req.body);

        return res.status(200).json({
            id, name, avatar_id, email
        })

    }

    async update(req, res){

        const delivererExists = await Deliverer.findOne({
            where: { id: req.params.id }
        });

        if(!delivererExists){
            return res.status(404).json({ error: "not found"});
        }

        await Deliverer.update(req.body, { where: { id: req.params.id }});


        return res.status(200).json({
            message: "deliverer updated"
        });

    }

    async delete(req, res){

        const delivererExists = await Deliverer.findOne({
            where: { id: req.params.id }
        });

        if(!delivererExists){
            return res.status(404).json({ error: "not found"});
        }

        await Deliverer.delete({ where: { id: req.params.id }});

        return res.status(200).json({
            message: "deliverer deleted"
        });

    }

    async index(req, res){

        const response = await Deliverer.findAll();

        return res.status(200).json({
            response
        })

    }


}

export default new DelivererController();
