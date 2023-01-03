import express from 'express'
import logger from './logger.js'

const app = express()
// "/sumar?n1=2&n2=44"
// "/sumar?n1=2s&n2=44"
app.get('/sumar', (req, res) => {
  const { n1, n2 } = req.query
  if (!isNaN(n1) && !isNaN(n2)) {
    logger.info(`Parámetros ${n1} y ${n2} correctos para la suma`)
    res.send(`La suma de ${n1} más ${n2} es ${parseInt(n1) + parseInt(n2)}`)
  } else {
    
    logger.error('Parámetros incorrectos para la suma')
    res.send('Parámetros de entrada no válidos')
  }
})

app.get('*', (req, res) => {
  const { url, method } = req
  logger.warn(`Ruta ${method} ${url} no implementada`)
  res.send(`Ruta ${method} ${url} no está implementada`)
})

const PORT = parseInt(process.argv[2]) || 8080

const server = app.listen(PORT, () => {
  logger.info(`Servidor express escuchando en el puerto ${PORT}`)
})
server.on('error', error => logger.error(`Error en servidor: ${error}`))
