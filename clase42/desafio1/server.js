import { request } from 'https'
import { writeFile } from 'fs'
const opt={
    hostname:'jsonplaceholder.typicode.com',
    port:443,
    path:'/posts',
    method:'GET'
}
const req= request(opt, res => {
    let response = ""
    res.on('data', data =>{
        response+=data
    })
    res.on('end', ()=>{
        const archivo='postHttps.json'
        // para que response pierta sus funcionalidades de tipo 
        // lo pasamos a string para que pierda sus funcionalidades
        // luego lo volvemos a crear como obj "plano/normal"
        // JSON.parse( JSON.stringify(response) ) 

        const  posts= JSON.parse(response)
        writeFile(archivo,JSON.stringify(posts, null, '\t'),err=>{
             if(err)
                console.log("fallo crear el archivo ",err)
            else
                console.log("el archivo creado con exito ")
        })
    })

})
req.on('error',error=>{
    console.log("fallo la peticion ",error)
})
req.end()