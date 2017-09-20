
import path from 'path'
import Koa from 'koa'
import opn from 'opn'
import webpack from 'webpack'
import { ENV_MAP } from '../config'
import webpackConfig from './webpack.config'

const {
  dev: {
    port: defaultPort,
    autoOpenBrowser,
    proxyTable
  }
} = ENV_MAP

const app = new Koa
const compiler = webpack(webpackConfig)
const port = process.env.PORT || defaultPort

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
