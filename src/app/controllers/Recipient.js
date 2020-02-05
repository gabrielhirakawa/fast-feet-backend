import Recipient from '../models/Recipient';

class RecipientController {
    async store(req, res) {

        const { nome, numero, complemento, estado, cidade, cep } = await Recipient.create(req.body)
            .catch(e => {
                res.status(400).json({ error: "erro ao salvar" })
            });

        if (nome) {
            return res.status(200).json({
                nome, numero, complemento, estado, cidade, cep
            });
        }
    }

    async update(req, res) {

        const recipientExists = await Recipient.findOne({
            where: { id: req.params.id }
        });

        if (!recipientExists) {
            return res.status(404).json({ error: "recipient does not exists" });
        }

        const { nome, numero, complemento, estado, cidade, cep } = await Recipient.update(req.body , { where: { id: req.params.id } });

        return res.status(200).json({
            nome, numero, complemento, estado, cidade, cep
        });
    }

}

export default new RecipientController();
