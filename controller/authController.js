const User = require("../models/userModel")
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const salt = 10

// User registration controller
const registerUser = async(req, res, next) => {
    const {firstname, username, email, password} = req.body;

    if (!firstname || !username || !email || !password) {
        return res.status(400).json({err: "invalid input details"})
    } else if (password.length < 8) {
        return res.status(400).json({err: "password is too short, min. of 8 chars"})
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return res.status(400).json({err: "invalid email"})
    } else if (!/^[a-zA-Z]+$/.test(firstname)) {
        return res.status(400).json({err: "invalid first name entered"})
    } else {
        try {
            const userAlreadyExist = await User.findOne({email: email});
            if (userAlreadyExist) {
                return res.status(400).json({err: "User with this email, already exist"});
            }

            const newUser = await User.create({
                firstname: firstname,
                username: username,
                email: email, 
                password: bcrypt.hashSync(password, salt)
            })
            res.status(200).json({message: "User signed in successfully", success: true, newUser}); 
            next();
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

// Controller for user login
const loginUser = async(req, res) => {

}


// Controller for user signOut
const signoutUser = async(req, res) => {

}

module.exports = {
    registerUser,
    loginUser,
    signoutUser
}

// The user's inputs are obtained from the req.body in the code above, and you then check the email to make sure no past registrations have been made. We'll use the values obtained from req.body to create the new user after that has occurred.


// You don't need to worry about how the unique _id was obtained because MongoDB always assigns a new user with a unique _id.