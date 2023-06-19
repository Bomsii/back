const express = require("express");
const router = express.Router();
const Note = require("../models/noteSchema")

// let notes = [
//     {
//         id: 1,
//         content: "Simple Web Server",
//         important: true
//     },
//     {
//         id: 2,
//         content: "Browser can execute only JavaScript",
//         important: false
//     },
//     {
//         id: 3,
//         content: "GET and POST are the most important methods of the HTTP protocol",
//         important: true
//     }
//   ]
  
// API Route OR Resource endpoints

//GET request for a single resource
// GET api/v1/notes/3
router.get("/:id", (req, res) => {
    // res.send("Returns a single resource")
    const idx = req.params.id;
    const singleNote = notes.find(note => note.id === Number(idx) );
    res.json(singleNote)
})

// GET request to fetch all the resources in the collection
// GET api/v1/notes
router.get("/", (req, res) => {
    res.json("ALL NOTES")
})

// POST request to create a new resource based on request data
// POST api/v1/notes
router.post("/", async(req, res) => {
    const {id, content, important} = req.body;
    try {
        const newNote = await Note.create({id, content, important}); 
        res.status(200).json({
            data: newNote
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
    // res.send("Will post OR add a new resource")
})

// DELETE request to remove identified resource
// DELETE api/v1/notes/4
router.delete("/:id", (req, res) => {
    res.send("Delete a single resource")
})

// PUT request to replace the entire identified resource with the request data
// PUT api/v1/notes/2
router.put("/:id", (req, res) => {
    res.send("Replaces all the content of a single resource")
})

// PATCH request to replace a part of the identified resource with the request data.
// PATCH api/v1/notes/7
router.patch("/:id", (req, res) => {
    res.send("Replaces part the content, not all of a single resource")
})



module.exports = router;