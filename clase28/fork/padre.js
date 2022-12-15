const {fork} = require('child_process')
const subProcess= fork('./hijo.js')
console.log(1111)
subProcess.on('message',message=>{
    console.log(`Este es el mensaje de mi hijo: `,message)
})
console.log(22222)
