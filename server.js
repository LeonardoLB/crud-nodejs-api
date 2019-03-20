const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Starting app
const app = express()

//Permite enviar dados no formato de json
app.use(express.json())

// Database Connection
mongoose.connect('mongodb://myuser:mypassword@localhost:27017/nodeapi', { useNewUrlParser: true })

// Schemas
requireDir('./src/models')

// Routes
app.use('/api', require('./src/routes'))

app.listen(3001)
