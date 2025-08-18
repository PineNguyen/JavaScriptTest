const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/studentDB');
        console.log("Connect MongoDB successfully!");
    } catch (error) {
        console.log("Connection fail!");
    }
}

module.exports = {connect};