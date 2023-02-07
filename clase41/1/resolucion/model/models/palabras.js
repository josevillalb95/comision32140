import Joi from 'joi'

class Palabras {

    constructor(palabra) {
        this.palabra = palabra
    }

    equals(otroPalabras) {
        if (!(otroPalabras instanceof Palabras)) {
            return false
        }
        if (this.palabra != otroNoticias.palabra) {
            return false
        }
        return true
    }

    static validar(palabra,requerido) {
        //console.log(palabra)
        const PalabraSchema = Joi.object({
            palabra: requerido? Joi.string().required() : Joi.string()
        })

        const { error } = PalabraSchema.validate(palabra)
        if (error) {
            throw error
        }
    }
}

export default Palabras