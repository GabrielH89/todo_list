const connection = require('../config/db');
const {Sequelize, DataTypes} = require('sequelize');

const Task = connection.define('task', {
    task: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Task;