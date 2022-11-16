const create=async(collections,data)=>{
    try{
        const document=collections.doc()
        // nos brinda un documento temporal con un id autogenerado
        await document.create(data)
        // ese documento le agrega datos y lo guarda
        console.log("creado !")
    }
    catch(e){
        console.error('Error al buscar los docuementos: ',e);
    }

}

const findOne=async(collections,id)=>{
    try{
        const document=await collections.doc(id).get()
        // document me va a responder const con funcionalida
        // y la funcion data es un getter a los datos que 
        // tiene almacenado
        return document.data()
    }
    catch(e){
        console.error('Error al buscar un docuemento: ',e);
    }

}
const findAll=async(collections)=>{
    try{
        const document=await collections.get()
        return document.docs.map(doc =>{ return {...doc.data(), id:doc.id}} )
    }
    catch(e){
        console.error('Error al crear un docuemento: ',e);
    }

}

const update=async(collections,id,data)=>{
    try{
        const document=collections.doc(id)
        await document.update(data)
        console.log("updateado !")

    }
    catch(e){
        console.error('Error al updatear un docuemento: ',e);
    }

}


const remove=async(collections,id)=>{
    try{
        const document=collections.doc(id)
        await document.delete()
        console.log("eliminado !")

    }
    catch(e){
        console.error('Error al eliminar un docuemento: ',e);
    }

}

module.exports={
    create,
    findOne,
    findAll,
    update,
    remove
}