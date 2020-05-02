const express = require('express')
const router = express.Router()
const Ninja =  require('../models/ninja')


//get list of ninja
router.get('/ninjas', async function (req,res) {
    try {
        const result = await Ninja.find({});
        res.send(result)
        // console.log(result)
    } catch (error) {
        throw error
    }
})

//add new ninja to db
router.post('/ninjas', async function (req,res,next) {
    try {
        const result = await Ninja.create(req.body)
        res.send(result)
    } catch (error) {
        next(error)
    }
})

//update ninja data
router.put('/ninjas/:id', async function (req,res,next) {
    try {
        const result = await Ninja.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.send({message:"success update ninja",data:result})
    } catch (error) {
        next(error)
    }

})

//delete ninja
router.delete('/ninjas/:id', async function (req,res,next) {
    try {
        const result = await Ninja.findByIdAndRemove({_id:req.params.id})
        res.send({message:"success delete ninja",data:result})
    } catch (error) {
        next(error)
    }

})

module.exports = router

