const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify([{id:1,task:'react vue server'},{id:2,task:'vue vue react server'}]))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})