const express = require('express')
const Routes = express.Router()
const todoList = require('../controller/Product/ProductController')
const middleware = require('../middleware/middlweraImage')
const middlewareAccount = require('../middleware/middleware_role/verify_role')
Routes.route('/')
    .post(middleware.single('image'), todoList.add_product)
    .get(todoList.get_product)
Routes.route('/:id')
    .get(todoList.get_product)
    .delete(todoList.delete_product)
    .put(middleware.single('image'), todoList.update_product)
module.exports = Routes
