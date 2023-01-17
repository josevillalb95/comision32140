import twilio from 'twilio'
import {config} from './config.js'
const clientTwilio= twilio(config.auth,config.pass)
const numberSend= process.argv[ 2 ]
const msjData={
    body:"Hola comision 32140",
    from:config.cel,
    to:numberSend 
}
try{
    const msj=await clientTwilio.messages.create(msjData)
    console.log(msj)
}
catch(e){
    console.log({e})
}