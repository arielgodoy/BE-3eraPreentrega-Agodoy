const { Router } = require('express')
const { ProductController } = require('../controllers/products.controller')

const router = Router()
const {
    getProducts,
    getProduct,
    createProduct, 
    updateProduct,
    deleteProduct
} = new ProductController()

router.get('/',        getProducts)
router.get('/:pid',    getProduct)
router.post('/',       createProduct)
router.put('/:pid',    updateProduct)
router.delete('/:pid', deleteProduct)

module.exports = router