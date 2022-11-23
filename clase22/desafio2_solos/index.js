// redundancia son
// empresa
// empresados
// personas
const normalizr = require("normalizr");
const normalizar = normalizr.normalize;
const desnormalizar = normalizr.denormalize;
const holding = require("../holding.json");
const util = require("util");
const mostrar = (objeto) => {
  console.log(util.inspect(objeto, false, 12, true));
};
const getLength = (obj) => JSON.stringify(obj).length;
const empleado = new normalizr.schema.Entity("empleado");
const empresa = new normalizr.schema.Entity("empresa", {
  empleados: [empleado],
  gerente: empleado,
  encargado: empleado,
});
const holdingSchema = new normalizr.schema.Entity("holding", {
  empresas: [empresa],
});

const holdingNormalizado = normalizar(holding, holdingSchema);
const holdingDesnormalizado = desnormalizar(
  holdingNormalizado.result,
  holdingSchema,
  holdingNormalizado.entities
);
const lengthNormalizado = getLength(holdingNormalizado);
const lengthDesormalizado = getLength(holdingDesnormalizado);
const porcentajeReducido =(lengthNormalizado*100) / lengthDesormalizado
console.log("NORMALIZADO: ",lengthNormalizado);
console.log("DESNORMALIZADO: ",lengthDesormalizado);
console.log("PORCENTAJE REDUCIDO: ",porcentajeReducido);
mostrar(holdingNormalizado);