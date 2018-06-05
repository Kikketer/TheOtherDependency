const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './index.js'
  },
  output: {
    library: 'theotherdep',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: ['react'],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: path.resolve('./src'),
        loader: require.resolve('babel-loader')
      }
    ]
  }
}