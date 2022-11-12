import Hotel from "../models/Hotel.js";
import { errorHandling } from "../utils/error.js";

// create hotel
export const createHotel = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);
    const createdHotel = await newHotel.save();
    res.status(201).json(createdHotel);
  } catch (err) {
    next(errorHandling(err.status, err.message));
  }
};

// get all hotels
export const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(errorHandling(err.status, err.message));
  }
};

// get hotel
export const getHotel = async (req, res, next) => {
  try {
    const { hotelId } = req.params;
    const hotel = await Hotel.findById(hotelId);
    res.status(200).json(hotel);
  } catch (err) {
    next(errorHandling(err.status, err.message));
  }
};

// update hotel
export const updateHotel = async (req, res, next) => {
  try {
    const { hotelId } = req.params;
    const updatedHotel = await Hotel.findByIdAndUpdate(
      hotelId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(errorHandling(err.status, err.message));
  }
};

// delete hotel
export const deleteHotel = async (req, res, next) => {
  try {
    const { hotelId } = req.params;
    await Hotel.findByIdAndDelete(hotelId);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    next(errorHandling(err.status, err.message));
  }
};
