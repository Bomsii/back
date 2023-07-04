const express = require("express");
const router = express.Router();


// CRUD OPERATIONS 
// C - CREATE uses the POST HTTP method to create and post new resources (in this case, blog post)
// R - READ uses the GET HTTP method, to retrieve a SINGLE RESOURCE OR ALL RESOURCES for that COllection ( in this case; a single BLOG POST OR ALL BLOG POST).
// U - UPDATE uses the PUT OR PATCH HTTP method to update the content of a SINGLE RESOURCE.
// D - DELETE/REMOVE uses the "DELETE" HTTP method to delete OR remove a SINGLE RESOURCE from the collection document in the database (in this case; deletes a single blog post).


// API ROUTES ENDPOINTS
// GET REQUEST ENDPOINT FOR A SINGLE RESOURCE
// GET /api/blogs/blogs/6

router.get("/:id", (req, res) => {
    res.status(200).json("GET SINGLE BLOG POST")
})


// // GET REQUEST ENDPOINT FOR ALL RESOURCES
// GET /api/blogs/
router.get("/", (req, res) => {
    res.status(200).json("GET ALL BLOG POSTS")
})

// // POST REQUEST ENDPOINT TO CREATE A NEW RESOURCE
// POST /api/blogs/
router.post("/", (req, res) => {
    res.status(200).json("POST NEW BLOG POST")
})


// // DELETE REQUEST ENDPOINT, TO REMOVE IDENTIFIED RESOURCE
// DELETE /api/blogs/:id
router.delete("/:id", (req, res) => {
    res.status(200).json("DELETE A SINGLE BLOG POST");
})

// // PUT REQUEST ENDPOINT, TO UPDATE THE ENTIRE IDENTIFIED RESOURCE
// PUT /api/blogs/:id
router.put("/:id", (req, res) => {
    res.status(200).json("UPDATE A SINGLE BLOG POST");
})


// // PATCH REQUEST ENDPOINT, TO REPLACE A PART OF THE IDENTIFIED RESOURCE
// PATCH /api/blogs/:id
router.patch(":/id", (req, res) => {
    res.status(200),json("REPLACE A PART OF A SINGLE BLOG POST")
})

module.exports = router;