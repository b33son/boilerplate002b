const path = require('path')
const webpack = require('webpack')
const CaseSensitivePlugin = require('case-sensitive-paths-webpack-plugin')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const version = require('../../package.json').version

module.exports = options => ({
  entry: Object.assign(
    {
      myapp: path.join(process.cwd(), 'src/index.js')
    },
    options.entry
  ),
  output: Object.assign(
    {
      // Compile into build/myapp-<version>.js
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
      filename: `[name]-${version}.js`
    },
    options.output
  ), // Merge with env dependent settings
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: options.babelLoaderOptions
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(mp4|webm)$/,
        use: ['url-loader?limit=10000']
      }
    ]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),
    new DuplicatePackageCheckerPlugin({
      // Also show module that is requiring each duplicate package
      verbose: true
    }),
    new CaseSensitivePlugin(),
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        RELEASE_STAGE: JSON.stringify(process.env.RELEASE_STAGE)
      },
      __APP_VERSION__: JSON.stringify(version)
    }),
    new webpack.BannerPlugin({ banner: `Talkdesk - My App: ${version}` })
  ]),
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.css', '.scss']
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: true
})
