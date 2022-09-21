const fs = require('fs')
class Desafio{
    name=""
    constructor(name){
        this.name=`./${name}.txt`
    }

    async save(obj){
        try {
            const archivo =[]
            try{
                const lectura=await this.getAll() 
                if(lectura){
                    archivo.concat(lectura)
                }
            }
            catch{  }
            archivo.push(obj)
            await fs.promises.writeFile(this.name, JSON.stringify(archivo, null, 3) )
            console.log("escrito correctamente")
        } catch (error) {
            console.log(`Error en escritura `,error)
        }

    }
    async getById(){

    }

    async getAll(){
        try {
           const archivo=  await fs.promises.readFile(this.name, 'utf-8')
           return JSON.parse(archivo)
        } catch (error) {
            console.log(`fallo lectura `,error)
        }
    }
    async deleteById(){

    }

    async deleteAll(){

    }
}

const documento=new Desafio('desafio')
documento.getAll().then( console.log )
documento.save({
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    id: 2
})