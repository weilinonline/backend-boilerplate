import path from 'path'
import dev from './dev'
import build from './build'

const NODE_ENV_MAP = {
  development: 'dev',
  production: 'build'
}

const ENV_MAP = {
  build: {
    env: build,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: dev,
    port: 9999,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}

export {
  NODE_ENV_MAP,
  ENV_MAP
}