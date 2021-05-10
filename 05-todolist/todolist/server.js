const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify([{id:1,task:'react react'},{id:2,task:'vue vue'}]))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})