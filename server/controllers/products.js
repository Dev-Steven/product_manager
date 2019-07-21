const mongoose = require('mongoose'); 
const Product = mongoose.model('Product');

module.exports = {
    //all methods come here after service

    // Finds all the products
    getAll: (req, res) => {
        Product.find({}, (err, allProducts) => {
            if(err) {
                console.log(err);
                res.json({message: "error", error: err});
            }
            else {
                res.json({message: "success", products: allProducts})
            }
        });
    },

    create: (req, res) => {
        var user = new Product(req.body);
        user.save( (err, newProduct) => {
            // If there's an error, enter
            if(err){
                console.log(err);
                // Create a key called message and give it the value of "error"
                // ALSO creating a key called error and assigning it the object of err
                res.json({message: "error", error: err});
            }
            // If no errors
            else {
                // Create a key called message and give it the value of "success"
                // ALSO creating a key called products and assigning it the object of newProduct
                res.json({message: "success", products: newProduct});
            }
        });
    },

    delete: (req, res) => {
        console.log(`In products, ID is ${req.params.id}`);
        Product.findByIdAndDelete( (req.params.id), (err, data) => {

            if(err){
                console.log("There's was an error deleting", err);
                res.json({message: "error", error: err});
            }
            else {
                console.log('Data: ', data);
                res.json({message: "success", deleted: data})
            }

        });
    }
}