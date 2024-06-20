
const mongoose = require("mongoose");


const productSchema= new mongoose.Schema({ 

    name:String,
    brand:String,
    description:String, 
    category:String,
    subcategory:String,
    tags:String,
    price: String,
    imagepath:String
})

module.exports = mongoose.model("product", productSchema);