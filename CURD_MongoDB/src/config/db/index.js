require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Connect MongoDB successfully!");
    } catch (error) {
        console.log("Connection fail!");
    }
}

module.exports = {connect};