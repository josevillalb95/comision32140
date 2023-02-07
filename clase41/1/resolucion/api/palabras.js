import PalabrasFactoryDAO from '../model/DAOs/PalabrasFactory.js'
import Palabras from '../model/models/palabras.js';

class ApiPalabras {

    constructor() {
        this.PalabrasDAO = PalabrasFactoryDAO.get()
    }

    async obtenerPalabras(id) { 
        let palabras = await this.PalabrasDAO.obtenerPalabras(id)
        return palabras.map(p => p.palabra).join(' ')
        // [{ palabra , id , time},...,{ palabra , id , time}]
        
        // [ 'palabra', ..., 'palabra 233']
        
        // 'palabra palabra 233'
    }

    async guardarPalabra(palabra) { 
        ApiPalabras.asegurarPalabraValida(palabra,true)
        return await this.PalabrasDAO.guardarPalabra(palabra) 
    }

    static asegurarPalabraValida(palabra,requerido) {
        try {
            Palabras.validar(palabra,requerido)
        } catch (error) {
            throw new Error('la Palabra posee un formato json invalido o faltan datos: ' + error.details[0].message)
        }
    }    
}

export default ApiPalabras
