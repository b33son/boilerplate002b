const express = require('express')
const logger = require('./logger')

const argv = require('minimist')(process.argv.slice(2))
const setup = require('./middlewares/frontendMiddleware')
const resolve = require('path').resolve
const app = express()

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi)

// In production we need to pass these values in instead of relying on webpack
if (process.env.APP) {
  setup(app, {
    outputPath: resolve(process.cwd(), 'build'),
    publicPath: '/',
    templatePath: resolve(process.cwd(), 'src', 'index.ejs')
  })
}

// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3030

// Start your app.
app.listen(port, err => {
  if (err) {
    return logger.error(err.message)
  }
  logger.appStarted(port)
})
