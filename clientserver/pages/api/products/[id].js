import dbConnect from "../../../util/mongo";
import ProductModel from "../../../models/ProductModel";

export default async function handler(req, res) {
    const {
        method,
        query: { id },
        cookies
    } = req;

    const token = cookies.token
    dbConnect();
    if (method === "GET") {
        try {
            const product = await ProductModel.findById(id);
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "PUT") {
        if(!token || token !== process.env.token){
            return res.status(401).json("Not authenticated!")
        }
        try {
            const product = await ProductModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "DELETE") {
        try {
            const product = await ProductModel.findOneAndDelete(id);
            res.status(201).json("The product has been deleted!");
        } catch (err) {
            res.status(500).json(err);
        }
    }
}