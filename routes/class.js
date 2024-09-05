const express = require('express');

// import all the controllers
const {
    getAllClasses,
    getOneClass,
    createClass,
} = require('../controllers/class');

// create a new instance or express router
const api = express.Router();

// decide which controllers to execute on the specific actions
api.route('/').get(getAllClasses).post(createClass);

api.route('/:id').get(getOneClass);

module.exports = api;
