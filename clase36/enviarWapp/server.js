import { config } from "./config.js";
import twilio from 'twilio'
const client= twilio(config.user,config.pass)
const to= process.argv[2]
const msj= process.argv[3]
try{
    const mensaje=await client.messages.create({
        body:msj,
        from:config.number,
        to:'whatsapp:+5492235255285',
        mediaUrl:['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmc4F2Gql9xS32EODSqj2JOoV5J0_7xJuvA&usqp=CAU']
    })
    console.log({mensaje})
}
catch(e){
    console.log({e})
}