const parseArgs = require('minimist');
const options={ 
    default:{ modo:'test'},
    alias:{
        e:'enviroment',
        p:'port'
    } 
}
const arg=parseArgs(process.argv.slice(2),options)
console.log('no identificados:',arg._)
delete(arg._)
console.log("identificados:",arg.port)
console.log("identificados:",arg.enviroment)
console.log("identificados:",arg.modo)