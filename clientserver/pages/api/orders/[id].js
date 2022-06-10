import OrderModel from "../../../models/OrderModel";

const handler = async (req, res) => {
    const {method, query: {id}} = req;

    if (method === "GET") {
        try {
            const order = await OrderModel.findById(id);
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if (method === "PUT") {
        try {
            const order = await OrderModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "DELETE") {

    }
}

export default handler;