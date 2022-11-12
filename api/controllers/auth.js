import bcryptjs from "bcryptjs";

import User from "../models/User.js";

import { errorHandling } from "../utils/error.js";

// register
export const registerUser = async (req, res, next) => {
  try {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();

    res.status(201).json("User has been created");
  } catch (err) {
    next(errorHandling(err.status, err.message));
  }
};

// login
export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(errorHandling(404, "User not found!"));

    const passIsCorrect = await bcryptjs.compare(
      req.body.password,
      user.password
    );
    if (!passIsCorrect)
      return next(errorHandling(400, "Password or username is not correct!"));

    const { password, isAdmin, ...otherUserInfo } = user._doc;

    res.status(200).json(otherUserInfo);
  } catch (err) {
    next(errorHandling(err.status, err.message));
  }
};
