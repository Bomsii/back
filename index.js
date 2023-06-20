const express = require('express') // importing the express module
const app = express() // using the express function to create an express application stored in a variable called "app"
const pageRoutes = require("./routes/pageRoutes")
const apiRoutes = require("./routes/apiRoutes")
const authRoutes = require("./routes/authRoutes")
const mongoose = require("mongoose")
require("dotenv").config();
const port = 6000

// Next, we define two routes to the application.
// The first one defines an event handler that is used to 
// handle HTTP GET requests made to the application's root

//middleware
// middleware is a function or piece of code that runs between when a server gets a request from a client and 
// when it sends a response back to the client
app.use(express.urlencoded({extended: true}));
app.use(express.json())


//ROUTES & ENDPOINTS
// Is a function that gets executed between when a request is made, and when a response is returned.
app.use("/", pageRoutes);
app.use("/api/v1/notes", apiRoutes);
app.use("auth/", authRoutes);

// Connecting to MongoDB Database
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Now connected to MongoDB!")
})
.catch((error) => {
  console.log(error)
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})


// the event handler function accepts two parameters. 
// The first request parameter contains all of the information of the HTTP request.
// The second response parameter is used to define how the request is responded to.