const {exec} = require('child_process')
exec('ls',(err,stdout,stderr)=>{
    if(err)return console.log(`Error exec ${err}`)
    if(stderr) return console.log(`Error STDERR ${stderr}`)
    console.log(`salida: ${stdout}`)
})