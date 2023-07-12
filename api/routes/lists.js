const router =  require('express').Router();
const List = require("../models/List");
// const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");


// CREATE AND SAVING IN DATABASE 
router.post("/" ,verify, async (req,res)=>{
    if(req.user.isAdmin){
     //  creating new movie 
     const newList = new List(req.body);   
    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
     res.status(500).json(err);
    }
 }
 else{
     res.status(403).json("You are not allowed.")
 }
})


// DELETING
router.delete("/:id" ,verify, async (req,res)=>{
    if(req.user.isAdmin){ 
    try {
      await List.findByIdAndDelete(req.params.id) ;
      res.status(200).json("List has been deleted Successfully");
    } catch (err) {
     res.status(500).json(err);
    }
 }
 else{
     res.status(403).json("You are not allowed.")
 }
})



// GET
router.get("/" , verify , async (req,res)=>{

    // typeQuery is for selection of movie or series
    const typeQuery = req.query.type;

    // genreQuery is for selection e.g comedy, adventure etc.
    const genreQuery = req.query.genre;
                                       
    let list = [];

    try {
        if(typeQuery){
            if(genreQuery){
          list = await List.aggregate([
                    {$sample: {size:10}},
                    {$match:{type: typeQuery, genre: genreQuery } },
                ]);
            }       

            // if no genre is provided 
        else{
            list = await List.aggregate([
                 {$sample: {size:10}},
                 {$match:{type: typeQuery} },
             ]);       
          }
        }

        // If no type is selected then return any random data
        else{
            list = await List.aggregate([
                {$sample:{ size:20}}
            ]);
        }
      res.status(200).json(list);
    } catch (err) {
      res.status(500).json(err);
    }
})

module.exports = router;



// https://firebasestorage.googleapis.com/v0/b/netflixapp-79db0.appspot.com/o/items%2F1687885750694videoScreenshot%20(3).png?alt=media&token=70cfae0f-af06-4a00-837b-b3183b0e78f6