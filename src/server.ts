import express from 'express'
import { URLController } from '@controllers/URLController';
const host = "https://localhost:";
const port = "5000";

const api = express();
api.use(express.json())

const urlController = new URLController();

api.post("/shorten", urlController.shorten)

api.listen(port, () => console.log(`Express listening ${host + port}`));