
let ProductDao

//dependiendo del valor de la variable de entorno PERSISTENCE, se importa el dao correspondiente
const persistence = process.env.PERSISTENCE
switch (persistence) {
    case 'FILE':
        //importa el dao de las entidades con persistencia en archivo
        break;
    case 'MEMORY':
        //importa el dao de las entidades con persistencia en memoria
        break;
    default:
        //importa el dao de las entidades con persistencia en base de datos
        const ProductDaoMongo = require("./ProductDaoMongo.js");
        ProductDao = ProductDaoMongo
        break;
}


module.exports = {
    ProductDao
}

