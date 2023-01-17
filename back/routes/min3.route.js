const express = require('express')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        res.status(201).json('route works')
    } catch (error) {
        console.error(error)
    }
})

module.exports = router