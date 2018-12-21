// console.log(process.env.npm_lifecycle_script)
// console.log(process.argv.length)
// console.log(process.argv)
const webpack = require('webpack')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const build_env = require('./config/set.env.ts')
console.log(build_env)
module.exports = {
  // 选项...
  pluginOptions: {

  },
  transpileDependencies: [resolve('config/index.js'), resolve('config/set.env.js')],
  configureWebpack: {
    resolve: {
      alias: {
        'config': resolve('config'),
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.env': JSON.stringify(build_env)
      })
    ]
  }
}
