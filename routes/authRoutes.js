const express = require("express");
const router = express.Router();
const { registerUser, loginUser, signoutUser} = require("../routes/authRoutes")


// Controller to register new user
router.post("/register", registerUser);

// Controller to login existing user
router.post("/login", loginUser);

// Controller to logout/sign out a user
router.post("/logout", signoutUser)


