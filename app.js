const express = require('express');
const app = express();

const mongoose = require('mongoose');
const task = require('./Models/task');

app.use(express.json());

app.get('/todo', async (req, res) => {
    const tasks = await task.find({});
    res.send(tasks);
})

app.post('/todo', async (req, res) => {
    const Task = req.body;
    try {
        newTask = await task.create(Task);
    } catch (err) {
        console.log(err);
        return res.send(err.message);
    }
    res.send(newTask);
})

const start = async () => {
    await mongoose.connect('');
    console.log('Connected to db.');
    app.listen(3000);
}

start();
