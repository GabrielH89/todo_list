const {Sequelize} = require('sequelize');
require('dotenv').config();
console.log();

const connection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

try{
    connection.authenticate();
    console.log("Connected with success");
}catch(err) {
    console.log("This error ocurred: " + err);
}

module.exports = connection;







