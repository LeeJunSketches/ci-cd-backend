import { Express } from "express";
import * as Controller from "src/controllers/data-encyptor";

const setRoutes = (app: Express) => {
    app.get("/encrypt", Controller.encryptData);
    app.get("/decode", Controller.decodeData);
};

export default setRoutes;