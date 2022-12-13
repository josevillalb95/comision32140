require('dotenv').config()
const env=process.env
const PUERTO = env.PUERTO||'0'
const MODO = env.MODO||'prod'
const DEBUG = env.DEBUG==='true'
console.log({PUERTO,MODO,DEBUG})