const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

var NewUserSchema  = new Schema({
    firstName : String,
    lastName:String,
    gender: String,
    dob: String,
    district: String,
    phone: Number,
    address: String,
    email:String,
    password:String
});

var UserData = mongoose.model('user', NewUserSchema);
module.exports = UserData;