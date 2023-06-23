const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// connect to mongoDB Database
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