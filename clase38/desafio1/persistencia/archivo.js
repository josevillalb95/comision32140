import { promises as fs} from 'fs'
const nameDB='./DB.json'
const getAll= async()=>{
    try{
        const datos=  await fs.readFile(nameDB,'utf-8')
        return JSON.parse(datos)
    }
    catch(e){
        return []
    }
}
const save = async(dato)=>{
    const datos=await getAll()
    datos.push(dato)
    await fs.writeFile(nameDB,JSON.stringify(datos,null,2))
    return datos
}
const guardar=async(dato)=>{
    save(dato)
}
const listar=async()=>{
    return await getAll()
}
export { 
    guardar,
    listar
}