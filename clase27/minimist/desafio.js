const parseArgs = require('minimist');
const options={ 
    default:{ modo: 'prod', puerto: 0, debug: false },
    alias:{
        m:'modo',
        p:'puerto',
        d:'debug',
        // _:'otros' nose pude 
    } 
}
const argumentos=parseArgs(process.argv.slice(2),options)
// node main.js 1 2 3 -m dev -p 8080 -d
// { modo: 'dev', puerto: 8080, debug: true, otros: [ 1, 2, 3 ] }
// node main.js 1 2 3
//{ modo: 'prod', puerto: 0, debug: false, otros: [ 1, 2, 3 ] }

console.log("modo",argumentos.modo)
console.log("puerto",argumentos.puerto)
console.log("debug",argumentos.debug)
console.log("otros",argumentos._)
