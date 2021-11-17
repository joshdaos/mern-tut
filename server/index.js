const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user123:test123@mern-tut.lx6oz.mongodb.net/merntutorial?retryWrites=true&w=majority');




app.listen(7001, () => {
    console.log('Server is running..')
});