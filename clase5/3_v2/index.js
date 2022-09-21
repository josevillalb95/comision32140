
const moment= require('moment')
const hoy=moment(new Date())
const nacimientoProfe=moment(new Date('1995-07-04 19:22'))
console.log("HOY ES ",hoy.format("DD/MM/YYYY HH:mm"))
console.log("NACI ",nacimientoProfe.format("DD/MM/YYYY"))
console.log("PASARON ",hoy.diff(nacimientoProfe,'years')," años")
console.log("PASARON ",hoy.diff(nacimientoProfe,'days')," dias")

