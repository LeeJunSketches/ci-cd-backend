import { Request, Response } from "express";
import * as Service from "src/services/data-encryptor";

export const encryptData = (req: Request, res: Response) => {
    res.send(Service.encryptData(req.query));
};

export const decodeData = (req: Request, res: Response) => {
    const data = req.query;
    const token = data.token as string;
    
    if(!token || typeof token !== "string") {
        return res.send("invalid token").status(400);
    }

    const decodedData = Service.decodeData(token);
    if(decodedData.error) {
        return res.send("invalid token").status(400);
    }

    res.send(decodedData.data);
};