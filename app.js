#!/usr/bin/env node

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');

const categories = require('./controllers/categoryController.js')
const products = require("./controllers/productsController.js")
const users = require('./controllers/usersController.js')
const body = require('./midllewares/bodyMiddleware')
const log = require("./midllewares/logMidlleware")
const exisrUser = require("./midllewares/existUserMiddleware.js")
const errors = require("./controllers/errorsController.js")

const db = require("./services/db")

require('dotenv').config();

app.use(db)
const port = process.env.PORT 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(log)
app.use(body)
app.use(users)
app.use(exisrUser)
app.use(categories)
app.use(products)
app.use(errors)

app.listen(port, () => {  
    console.log(process.env.WEB_URL); 
});
