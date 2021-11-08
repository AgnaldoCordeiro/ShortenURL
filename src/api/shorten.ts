import express from "express";
import { URLController } from "../controllers/URLController";
import { MongoConnection } from "../database/MongoConnection";

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const api = express.Router();
  const database = new MongoConnection();
  database.connect();

  const urlController = new URLController();
  api.post("/shorten", urlController.shorten);
  api.get("/:hash", urlController.redirect);
}
