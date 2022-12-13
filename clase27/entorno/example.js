const path = require('path')
const modo = process.env.MODO
const configDotenv={path:path.resolve(__dirname, '.env')}
if(modo==='test')
    configDotenv.path=path.resolve(__dirname, '.env.example')
require('dotenv').config(configDotenv)
console.log("CREDENCIALES: ",process.env.CREDENCIALES)