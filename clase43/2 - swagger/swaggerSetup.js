const swaggerJsdoc = require("swagger-jsdoc");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "DESAFIO NUMERO 2",
            description: "PRACTICANDO DOCUMENTACION CON Swagger",
        },
    },
    apis: [ './docs/**/*.yaml' ],
};
const swaggerSetup = swaggerJsdoc(options)
module.exports={swaggerSetup}