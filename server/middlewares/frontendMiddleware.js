const express = require('express')
const path = require('path')
const compression = require('compression')
const version = require('../../package.json').version

// Dev middleware
const addDevMiddlewares = (app, webpackConfig) => {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    stats: {
      colors: true
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem

  app.get('/', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404)
      } else {
        res.send(file.toString())
      }
    })
  })
}

// Production middlewares
const addProdMiddlewares = (app, options) => {
  const publicPath = options.publicPath || '/'
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build')
  const templatePath = options.templatePath || path.resolve(process.cwd(), 'index.ejs')

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression())
  app.use(publicPath, express.static(outputPath))
  app.locals.version = version
  app.set('view engine', 'ejs')

  app.get('/', (req, res) => res.render(templatePath))
}

// Front-end middleware
module.exports = (app, options) => {
  const isProd = process.env.RELEASE_STAGE === 'production'

  if (isProd) {
    addProdMiddlewares(app, options)
  } else {
    const webpackConfig = require('../../internals/webpack/webpack.dev.babel')
    addDevMiddlewares(app, webpackConfig)
  }

  return app
}
