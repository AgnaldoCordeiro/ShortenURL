import express from "express";
import { URLController } from "@controllers/URLController";
import { MongoConnection } from "@database/MongoConnection";
const host = "https://localhost:";
const port = "5000";

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();

api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);

api.listen(port, () => console.log(`Express listening ${host + port}`));
