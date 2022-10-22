import express from "express";
import dataEncryptoRoutes from "src/routes/data-encryptor";

const app = express();

dataEncryptoRoutes(app);

export default app;