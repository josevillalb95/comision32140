const yargs = require("yargs/yargs")(process.argv.slice(2));
const args = yargs
  .default({
    modo: "prod",
    puerto: 0,
    debug: false,
  })
  .alias({
    m: "modo",
    p: "puerto",
    d: "debug",
  })
  .boolean('debug')
  .argv;


console.log("modo",args.modo)
console.log("puerto",args.puerto)
console.log("debug",args.debug)
console.log("otros",args._)
