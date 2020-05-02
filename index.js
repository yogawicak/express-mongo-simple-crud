const express = require('express');
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const routesapi = require('./routes/api')
const mongourl = 'mongodb://root:rootpassword@localhost:27017/ninja-db?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'

//set up express app
const app = express()

//connect mongodb
mongoose.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology:true,useFindAndModify:false})

app.use(bodyparser.json())

app.get('/', function (req,res) {
    res.send('HELLO WORLD GET REQUEST')
})

//api routes
app.use('/',routesapi)

//error handling
app.use( function (err,req,res,next) {
    res.status(422).send(err)
})

//listen request
app.listen(process.env.port || 4000, function(){
    console.log('Hello World')
})