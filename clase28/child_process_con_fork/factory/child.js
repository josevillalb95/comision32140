const { sum } = require("./suma");
let result = sum();
process.send(`Resultado de la suma: ${result}`);
process.exit();