const { connect } = require("mongoose");
const dotenv = require('dotenv');
const { program } = require("../utils/commander.js");
const getMode = () => {    
    const options = program.opts(); // Accede a las opciones del programa sin usar el operador de encadenamiento opcional
    if (options && options.mode) {
        console.log(options.mode);
        return options.mode;
    } else {    
        console.log('development');
        return 'development';
    }
};
const mode = getMode();

dotenv.config({
    path: mode === 'production' ? `${__dirname}/../.env.production` : `${__dirname}/../.env.development` 
})

const configObject = {
    PORT: process.env.PORT,
    mongo_url: process.env.MONGO_URL,
    jwt_secret_key: process.env.JWT_SECRET_KEY,
    gh_client_id:process.env.GITHUB_CLIENTID,
    gh_client_secret:process.env.GITHUB_CLIENT_SECRET,
    gmail_pass_app: process.env.GMAIL_PASSAPP,
    gmail_user: process.env.GMAIL_USERAPP
}

//console.log(configObject);
const connectDB = async () => {
    try {    
        await connect(process.env.MONGO_URL);
        console.log('Base de datos conectada');
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    configObject,
    connectDB
}
