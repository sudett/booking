import express from "express";
import {
  createHotel,
  getHotel,
  getAllHotels,
  updateHotel,
  deleteHotel,
} from "../controllers/hotel.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const Router = express.Router();

Router.post("/", verifyAdmin, createHotel);
Router.get("/", getAllHotels);
Router.get("/:hotelId", getHotel);
Router.put("/:hotelId", verifyAdmin, updateHotel);
Router.delete("/:hotelId", verifyAdmin, deleteHotel);

export default Router;
