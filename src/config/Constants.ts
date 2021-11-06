import dotenv from "dotenv";
dotenv.config();
export const config = {
  API_URL: "http://localhost:5000",
  MONGO_CONNECTION: process.env.MOONGODB,
};
