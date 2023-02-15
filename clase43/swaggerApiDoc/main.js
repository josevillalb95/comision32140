const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      description:
        'A simple CRUD API application made with Express and documented with Swagger',
    },
  },
  apis: ['./docs/**/*.yaml'],
}

const app = express()

const specs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`)
})
