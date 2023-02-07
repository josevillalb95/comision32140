import PalabrasMemDAO from './PalabrasMem.js'

class PalabrasFactoryDAO {
    static get() {
        return new PalabrasMemDAO()
    }
}

export default PalabrasFactoryDAO