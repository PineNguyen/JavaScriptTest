const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    ten: String,
    msv: String,
    chuyenNganh: String
}) 

module.exports = mongoose.model('Student', Student);