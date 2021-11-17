const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

// parses the body
app.use(express.json());

mongoose.connect('mongodb+srv://user123:test123@mern-tut.lx6oz.mongodb.net/merntutorial?retryWrites=true&w=majority');

app.get('/getUsers', (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})


app.listen(7001, () => {
    console.log('Server is running..')
});