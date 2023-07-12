const router =  require('express').Router();
const Movie = require("../models/Movie");
// const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");



// CREATE AND SAVING IN DATABASE 
router.post("/" ,verify, async (req,res)=>{
    if(req.user.isAdmin){
     //  creating new movie 
     const newMovie = new Movie(req.body);   
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
     res.status(500).json(err);
    }
 }
 else{
     res.status(403).json("You are not allowed.")
 }
})


// UPDATING
router.put("/:id" , verify , async (req,res)=>{
       if( req.user.isAdmin){
       try {

        // finding and updating the movie 
         const updatedMovie = await  Movie.findByIdAndUpdate(req.params.id , {
            $set: req.body,
         }, {new: true});
         res.status(200).json(updatedMovie);
       } catch (err) {
        res.status(500).json(err);
       }
    }
    else{
        res.status(403).json("You are not allowed to update.")
    }
})



// DELETING
router.delete("/:id" , verify , async (req,res)=>{
    if( req.user.isAdmin){
    try {

     // finding and deleting the movie 
     await  Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie Deleted Successfully");
    } catch (err) {
     res.status(500).json(err);
    }
 }
 else{
     res.status(403).json("You are not allowed to delete.")
 }
})



// GETTING
router.get("/find/:id" , verify , async (req,res)=>{

    // There are no conditions used so that everyone can see movies and thing is that the user must be authenticated.
    try {
     // finding and deleting the movie 
     const getMovie = await  Movie.findById(req.params.id);
      res.status(200).json(getMovie);
    } catch (err) {
     res.status(500).json(err);
    }
})


// GETTING A RANDOM MOVIE/SERIES
router.get("/random" , verify , async (req,res)=>{

    const type = req.query.type;

    // creating a movie and varying it according to the need
  let movie;
   try {

    // return only 1 video and checking if movie or series
      if(type==="series"){
        movie = await Movie.aggregate([
            { $match: {isSeries: true}},
            {$sample: {size:1}},
        ])
      }
      else{
        movie = await Movie.aggregate([
            { $match: {isSeries: false}},
            {$sample: {size:1}},
        ])
      }
      res.status(200).json(movie);

   } catch (err) {
      res.status(500).json(err);
   }
})


//GETTING ALL
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        // reverse is used to get the last created movie/series
        const movies = await Movie.find();
        res.status(200).json(movies.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });

module.exports = router;