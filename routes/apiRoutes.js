const express = require("express");
const router = express.Router();
const {updateNote,
    removeNote,
    getAllNotes,
    getSingleNote,
    addNewNote} = require("../controller/apiController")


// API Route OR Resource endpoints

//GET request for a single resource
// GET api/v1/notes/3
router.get("/:id", getSingleNote)

// GET request to fetch all the resources in the collection
// GET api/v1/notes
router.get("/", getAllNotes)

// POST request to create a new resource based on request data
// POST api/v1/notes
router.post("/", addNewNote)

// DELETE request to remove identified resource
// DELETE api/v1/notes/4
router.delete("/:id", removeNote)

// PUT request to replace the entire identified resource with the request data
// PUT api/v1/notes/2
router.put("/:id", updateNote)

// PATCH request to replace a part of the identified resource with the request data.
// PATCH api/v1/notes/7
router.patch("/:id", (req, res) => {
    res.send("Replaces part the content, not all of a single resource")
})



module.exports = router;