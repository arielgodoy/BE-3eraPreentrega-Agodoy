const { productService } = require("../repositories");

class ProductController {
    constructor(){
        this.service = productService
    }

    getProducts = async (req, res) => {
        try {
            const products = await this.service.getProducts()
            res.send({status: 'success', payload: products})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
    getProduct = async (req, res) => {
        try {
            const { pid } = req.params
            const product = await this.service.getProduct({_id: pid})
            res.send({status: 'success', payload: product})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
    
    createProduct = async (req, res) => {
        try {
            
            const {title, price, description, category, image, rating, code, stock, status} = req.body
            const result = await this.service.createProduct({title, price, description, category, image, rating, code, stock, status})
            // validar la respuoesta de la base de datos
            res.send({status: 'success', payload: result})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
    updateProduct = async (req, res) => {
        try {
            const { pid } = req.params
            const productToUpdate = req.body
            const result = await this.service.updateProduct({_id: pid}, productToUpdate)
            res.send({status: 'success', payload: result})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
    deleteProduct = async (req, res) => {
        try {
            const { pid } = req.params
            const result = await this.service.deleteProduct({_id: pid})
            res.send({status: 'success', payload: result})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}

module.exports = {
    ProductController
}

