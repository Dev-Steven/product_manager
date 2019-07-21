const mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"], minlength: [3, "Name must be a minimun length of 3 characters"]},
},{timestamps:true});
mongoose.model('Product', ProductSchema);