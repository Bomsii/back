const Note = require("../models/noteSchema")
const mongoose = require("mongoose");

const getSingleNote = async(req, res) => {
    // res.send("Returns a single resource")
    const idx = req.params.id;

      //Check if the id is a valid MongoDB id
      if(!mongoose.Types.ObjectId.isValid(idx)) {
        return res.status(404).json({error: "No such note"})
    }
      // find note post by id
      const note = await Note.findById(idx);

      // if the note we are searching for does not exist
      if(!note) {
          return res.status(404).json({error: "No such note found!"})
      }
      res.status(200).json(note)
    // const singleNote = notes.find(note => note.id === Number(idx) );
    // res.json(singleNote)
}

// controller to get all notes
const getAllNotes = async (req, res) => {
    // res.json("ALL NOTES")
    const notes = await Note.find({}).sort({createdAt: -1})
    res.status(200).json(notes);
}


// controller function for adding a new note
const addNewNote = async(req, res) => {
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
}


// Controller to delete specify resource
const removeNote = async (req, res) => {
    // res.send("Delete a single resource")
    const idx = req.params.id
       //Check if the id is a valid MongoDB id
       if(!mongoose.Types.ObjectId.isValid(idx)) {
        return res.status(404).json({error: "No such note"})
    }

    // find the note post by id
    const note = await Note.findOneAndDelete({_id: idx})

    // if the note we are searching for does not exist
    if(!note) {
        return res.status(404).json({error: "No such note"})
    }
    res.status(200).json(note)
}


// Controller to update specific resource
const updateNote = async (req, res) => {
    // res.send("Replaces all the content of a single resource")
    const idx = req.params.id;

    //Check if the id is a valid MongoDB id
    if(!mongoose.Types.ObjectId.isValid(idx)) {
           return res.status(404).json({error: "No such note"})
      }
  
      const note = await Note.findOneAndUpdate({_id: idx}, {...req.body})
      // if the note we are searching for does not exist
      if(!note) {
          return res.status(404).json({error: "No such note"})
      }
      res.status(200).json(note)
} 


module.exports = {
    updateNote,
    removeNote,
    getAllNotes,
    getSingleNote,
    addNewNote
}