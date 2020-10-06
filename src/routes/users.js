const express = require('express')
const router = express.Router()
const Users = require('../models/user')

// @route   GET /
// @desc    DETAIL user
// @access  Public

router.get('/', (req, res) => res.send('Hello!'))

router.get('/users', async (req, res) => {
    try {
        let user = await Users.find({})
        res.status(200).json(user)
    }catch(error){
        res.status(422).json(error)
    }
})

router.get('/users/:id', async (req, res) => {
    try {
        let user = await Users.findById(req.params.id)
        res.status(200).json(user)
    }catch(error){
        res.status(422).json(error)
    }
})

router.post('/users', async (req, res) => {
    let { name, login, matricula , password, is_active, is_admin } = req.body
    try{
        let user = await Users.create(req.body)
        res.status(200).json(user)
    }catch (err){
        console.error(error.message)
        res.status(422).json({"error" : "Server Error"})
    }
})

module.exports = router