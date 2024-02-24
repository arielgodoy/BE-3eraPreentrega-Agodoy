const { productsModel  } = require('./models/products.model.js')

class ProductDaoMongo {
  constructor() {    
    this.productModel = productsModel
  }

  get = async () => this.productModel.find()
  getbyId = async (id) => this.productModel.findOne(filter)
  crate = async (newProduct) => this.productModel.create(newProduct)
  update = async (pid, newProductUpdate) => this.productModel.findByIdAndUpdate({ _id: pid }, newProductUpdate, { new: true })
  delete = async (pid) => this.productModel.findByIdAndDelete({ _id: pid }, { new: true })

  
}
module.exports = ProductDaoMongo;
