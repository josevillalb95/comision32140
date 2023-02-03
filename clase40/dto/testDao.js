import PersonasDaoFile from "./PersonasDaoFile.js"
import PersonasDaoMem from "./PersonasDaoMem.js"
const personaDaoMem= new PersonasDaoMem()
// 1 crear un elemento 
console.log('------( TEST DAO MEM. )--------')

const persona1={
    nombre:"Lautaro",
    dni:'359456623',
    id:1
}
personaDaoMem.save(persona1)
const mostrar=()=>console.log('\n')+console.log(personaDaoMem.getAll())
mostrar()

const persona2={
    nombre:"Harijan",
    dni:'379456623',
    id:2
}
personaDaoMem.save(persona2)
mostrar()


personaDaoMem.updateById(1,{nombre:'Tomas',apellido:'Sanz'})
mostrar()


personaDaoMem.deleteById(2)
mostrar()

personaDaoMem.deleteAll()
mostrar()


console.log('------( TEST DAO FILE )--------')
const personaDaoFile=new PersonasDaoFile('./personas.txt')
await personaDaoFile.save(persona1)
const mostrar_FILE=async()=>{
    const msj=await personaDaoFile.getAll()
    console.log('\n')
    console.log(msj)
}
await mostrar_FILE()

await personaDaoFile.save(persona2)
await mostrar_FILE()


await personaDaoFile.updateById(1,{nombre:'Tomas',apellido:'Sanz'})
await mostrar_FILE()


await personaDaoFile.deleteById(2)
await mostrar_FILE()

await personaDaoFile.deleteAll()
await mostrar_FILE()
