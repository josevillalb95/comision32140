let instacia=null
export class PrimeraConexion {
    static instancia
    hora=0
    constructor() {
        this.hora = new Date().toLocaleString()
    }
    obtenerHora() {
        return this.hora
    }
    static getInstancia=()=>{
        if(!instacia)
            instacia=new PrimeraConexion()
        return instacia
    }
}
