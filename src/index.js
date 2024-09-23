require('dotenv').config()
const express = require('express')
const cors = require('cors')
// const error = require('./middlewares/error')
// const notfound = require('./middlewares/notFound')
const route = require('./AuthRoute/authroute')


const app = express()

app.use(cors())

app.use(express.json())

app.use('/auth', route)

// app.use( notfound )

// app.use( error )

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))