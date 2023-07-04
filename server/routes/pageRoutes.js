const express = require("express");
const { userVerification } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
router.get("/about", (req, res) => {
    res.send("This is the about page")
  })
  
router.get("/contact", (req, res) => {
    res.send("<h1>This is a contact page</h1>")
  })

router.get("/profile", userVerification)

module.exports = router;