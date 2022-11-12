import express from "express";
import {
  createHotel,
  getHotel,
  getAllHotels,
  updateHotel,
  deleteHotel,
} from "../controllers/hotel.js";

const Router = express.Router();

Router.post("/", createHotel);
Router.get("/", getAllHotels);
Router.get("/:hotelId", getHotel);
Router.put("/:hotelId", updateHotel);
Router.delete("/:hotelId", deleteHotel);

export default Router;
