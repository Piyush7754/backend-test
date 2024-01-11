const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    date: Date,
    status: String
});

const task = mongoose.model('task', taskSchema);

module.exports = task;