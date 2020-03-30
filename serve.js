const express = require('express')
const app = express()
const compression = require('compression')

const port = process.env.PORT || 80;

app.listen(port)

console.log(`server listening on port ${port}`)

app.use(compression())

app.use('/', (req, res, next) => {
  express.static('dist')(req, res, next);
})

