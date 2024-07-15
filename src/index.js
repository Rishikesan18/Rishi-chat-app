const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:5000']
}))

defa