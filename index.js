const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('you are tiitter')
  })

app.listen(process.env.PORT, () => {
  console.log(` app lisning ${port}`)
})