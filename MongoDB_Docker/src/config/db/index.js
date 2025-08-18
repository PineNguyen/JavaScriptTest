const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/studentDB');
        console.log("Kết nối MongoDB thành công!");
    } catch (error) {
        console.log("Chưa kết nối được MongoDB!");
    }
}

module.exports = {connect};