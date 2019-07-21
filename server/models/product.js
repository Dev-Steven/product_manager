const mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Title is required"], minlength: [3, "Name must be a minimun length of 3 characters"]},
    price: {type: Number, required: [true, "Price is required"]},
    img: {type: String, required: [true, "Img url is required"]},
},{timestamps:true});
mongoose.model('Product', ProductSchema);