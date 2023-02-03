import PersonasDaoMem from "./PersonasDaoMem.js"
const personaDao= new PersonasDaoMem()
// 1 crear un elemento 
const persona1={
    nombre:"Lautaro",
    dni:'359456623',
    id:1
}
personaDao.save(persona1)
const mostrar=()=>console.log('\n')+console.log(personaDao.getAll())
mostrar()

const persona2={
    nombre:"Harijan",
    dni:'379456623',
    id:2
}
personaDao.save(persona2)
mostrar()


personaDao.updateById(1,{nombre:'Tomas'})
mostrar()


personaDao.deleteById(2)
mostrar()

personaDao.deleteAll()
mostrar()