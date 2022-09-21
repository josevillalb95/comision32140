




const moment = require('moment');
const ahora =moment(new Date())
// const cumpleProfe=moment([1995, 6, 4])
const cumpleProfe=moment(new Date('1995-07-04 17:33'))


const diferenciaYear=(fecha1,fecha2) =>  fecha1.diff(fecha2, 'years', false) 
const diferenciaDays=(fecha1,fecha2) =>  fecha1.diff(fecha2, 'days', false) 


console.log('HOY ES: '+ahora.format("DD/MM/YYYY hh:mm"))
console.log('NACI EL DIA: '+cumpleProfe.format("DD/MM/YYYY"))

console.log("PASARON: "+diferenciaYear(ahora,cumpleProfe)+ " años")
console.log("PASARON: "+diferenciaDays(ahora,cumpleProfe)+ " dias")