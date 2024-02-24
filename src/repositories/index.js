
const { ProductDao } = require("../dao/factory.js");
const ProductRepository = require("../repositories/productos.repositories.js");


const productService = new ProductRepository(new ProductDao)

module.exports = {
    productService
}