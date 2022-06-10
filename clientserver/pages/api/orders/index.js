import dbConnect from "../../../util/mongo";
import OrderModel from "../../../models/OrderModel";

const handler = async (req, res) => {
    const {method} = req;

    await dbConnect();
    if (method === "GET") {
        try {
            const orders = await OrderModel.find();
            res.status(200).json(orders);
        }catch (err){
            res.status(500).json(err)
        }

    }

    if (method === "POST") {
        try {
            const order = await OrderModel.create(req.body);
            res.status(201).json(order)
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

export default handler;