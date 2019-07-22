const products = require('./../controllers/products');

module.exports = function(app) {

    //routes here
    app.get("/products",products.getAll)
    app.get("/product/:id", products.getOne)
    app.post("/product/create", products.create)
    app.put("/product/update/:id", products.update)
    app.delete("/products/delete/:id", products.delete)

}