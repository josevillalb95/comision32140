import fs from 'fs'
import { asDto } from './PersonaDTO.js'
export default class PersonasDaoFile {
    constructor(ruta){
        this.ruta=ruta
        this.personas=[]
    }
    async #leerArchivo(){
        const datos= await fs.promises.readFile(this.ruta,'utf-8')
        this.personas=JSON.parse(datos)
    }
    async #escribirArchivo(){
        const datos=JSON.stringify(this.personas,null,2)
        await fs.promises.writeFile(this.ruta,datos)
    }
    #getByIndex(id){
        return this.personas.findIndex(persona=>persona.id===id)
    }
    async getAll(){
        await this.#leerArchivo()
        return asDto(this.personas)
    }

    async getById(id){
        await this.#leerArchivo()
        return asDto(this.personas[this.#getByIndex(id)])
    }
    async save(personaNueva){
        await this.#leerArchivo()
        this.personas.push(personaNueva)
        await this.#escribirArchivo()
        return asDto(personaNueva)
    }
    async deleteById(id){
        await this.#leerArchivo()
        const index=this.#getByIndex(id)
        const [borrada]= this.personas.splice( index,1)
        await this.#escribirArchivo()
        return asDto(borrada)
    }
    async deleteAll(){
        this.personas=[]
        await this.#escribirArchivo()
    }
    async updateById( id, personaUpdate){
        await this.#leerArchivo()
        const index=this.#getByIndex(id)
        const update={...this.personas[index],...personaUpdate}
        this.personas[index]=update
        await this.#escribirArchivo()
        return asDto(update)
    }
 

}