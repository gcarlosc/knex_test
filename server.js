'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.disable('x-powered-by')

app.use('/', [
  require('./server/routes/project_routes'),
  require('./server/routes/type_routes')
])

app.use(require('./server/middleware/error_middleware').all)

module.exports = app
