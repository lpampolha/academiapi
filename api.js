const express = require('express')
const routeUsers = require('./src/routes/users')
const bodyParser = require('body-parser')
const app = express()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3001

//Define Rotas
app.use(express.json())
//app.use('/users', routeUsers)
app.use(routeUsers)
app.use(bodyParser.urlencoded({ extended:true }))

//Conexão com a base
connectDB()


app.listen(PORT, () => {console.log('Server Started!')})