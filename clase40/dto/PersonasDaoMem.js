import { asDto } from "./PersonaDTO.js"

export default class PersonasDaoMem {
    constructor(){
        this.personas=[]
    }
    #getByIndex(id){
        return this.personas.findIndex(persona=>persona.id===id)
    }
    getAll(){
        return asDto(this.personas)
    }
    getById(id){
        return asDto(this.personas[this.#getByIndex(id)])
    }
    save(personaNueva){
        this.personas.push(personaNueva)
        return asDto(personaNueva)
    }
    deleteById(id){
        const index=this.#getByIndex(id)
        const [borrada]= this.personas.splice( index,1)
        return asDto(borrada)
    }
    deleteAll(){
        this.personas=[]
    }
    updateById( id, personaUpdate){
        const index=this.#getByIndex(id)
        const update={...this.personas[index],...personaUpdate}
        this.personas[index]=update
        return asDto(update)
    }
 

}