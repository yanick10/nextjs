import { NextApiRequest, NextApiResponse } from "next";
import { ads } from "./data.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        res.status(200).json(ads);
    } else {
        res.status(405).json({ message: `method ${req.method} is not allowed` });
    }
};