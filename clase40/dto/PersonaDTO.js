export default class PersonaDto {
    constructor({id,nombre,dni}){
        this.id=id
        this.nombre=nombre
        this.dni=dni
    }
}
export function asDto(pers){
    if(Array.isArray(pers)){
        return pers.map(p=> new PersonaDto(p))
    }
    return new PersonaDto(pers)
}