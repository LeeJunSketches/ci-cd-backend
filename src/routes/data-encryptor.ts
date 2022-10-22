import { Express } from "express";
import * as Controller from "src/controllers/data-encyptor";

const setRoutes = (app: Express) => {
    app.get("/encrypt", Controller.encryptData);
    app.get("/decode", Controller.decodeData);
    app.get("/hello", (req, res) => {
        res.send("hello-world");
    });
};

export default setRoutes;