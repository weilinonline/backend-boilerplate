const { join } = require('path')
const { NODE_ENV_MAP } = require('../config')
const NODE_ENV = process.env.NODE_ENV

require('babel-register')

// loading
require(join(__dirname, NODE_ENV_MAP[NODE_ENV]))

