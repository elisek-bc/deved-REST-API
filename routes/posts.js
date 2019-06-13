const express = require('express');
const router = express.Router();
const post = require('../models/post');

router.get( '/', (req,res)=> {
    res.send("We are on posts");
});

router.get( '/specific', (req,res)=> {
    res.send("We are on a specific post");
});

//create a new post following the model
router.post('/', (req,res)=> {
    console.log(req.body);
});

// export the router
module.exports = router;