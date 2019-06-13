// get the package express in this file
const express = require('express');

// execute express on top of the app
const app = express();

const mongoose= require('mongoose');
require('dotenv/config');

// Import Routes
const postRoutes = require('./routes/posts');
const bodyParser = require('body-parser');

// MIDDLEWARES : Function that executes when routes are hit, used for authorisation
app.use('/posts', postRoutes); // "everytime you go to posts, use this postRoute"
app.use(bodyParser.json()); 
//app.use('/user', userRoutes);

// ROUTES
//req = request, res = response
//get = shoots back a message
app.get('/', (req,res)=> {
    res.send("We are on home");
});

// connect to database: hardcoded: mongoose.connect('mongodb+srv://elisek-bc:<be-code7>@test1-goifi.mongodb.net/test?retryWrites=true&w=majority',...
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => {
        console.log("Connection works!");
    }
);

// How do we start listening to the server?
app.listen(5000);