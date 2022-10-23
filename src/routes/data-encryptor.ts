import { Express } from "express";
import * as Controller from "src/controllers/data-encyptor";

const setRoutes = (app: Express) => {
    app.get("/encrypt", Controller.encryptData);
    app.get("/decode", Controller.decodeData);
    app.get("/", (req, res) => res.send({message: "hello world: master"}));
};

export default setRoutes;