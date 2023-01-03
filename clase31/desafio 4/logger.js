import pino from 'pino'

function buildProdLogger() {
  const prodLogger = pino('prod.log')
  prodLogger.level = 'warn'
  return prodLogger
}

function buildDevLogger() {
  const devLogger = pino()
  devLogger.level = 'info'
  return devLogger
}

let logger = null

if (process.env.NODE_ENV === 'PROD') {
  logger = buildProdLogger()
} else {
  logger = buildDevLogger()
}

export default logger
