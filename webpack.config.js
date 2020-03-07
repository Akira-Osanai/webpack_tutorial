const parh = require('path')

const outputPath = parh.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  }
}