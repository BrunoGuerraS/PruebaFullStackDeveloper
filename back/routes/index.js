const express = require('express')
const minRounter1 = require('./min1.route')
const minRounter2 = require('./min2.route')
const minRounter3 = require('./min3.route')
const usersRouter = require()


function routerApi(app){
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/users', minRounter3)
    router.use('/min1', minRounter1)
    router.use('/min2', minRounter2)
    router.use('/min3', minRounter3)
}


module.exports = routerApi
