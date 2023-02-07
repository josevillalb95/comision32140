class PalabrasBaseDAO {

    getNext_Id(palabras) {
        let lg = palabras.length
        return lg? parseInt(palabras[lg-1]._id) + 1 : 1
    }
}

export default PalabrasBaseDAO