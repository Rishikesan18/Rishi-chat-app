const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:5000']
}))

app.get('/',(req, res) => {
    res.send("Hello")
})

app.listen(8000, () => {
    console.log('listening to port 8000')
})

