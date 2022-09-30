const fs = require('fs');
class CRUD {
    constructor(fileName) {
        this.fileName = fileName;
        this.objects = this.readData(this.fileName) || [];
    }
    //Genera ID
    generateId() {
        return new Date().getTime()
    }
    //Guarda un objeto
    async create(obj) {
        try {
            const readFile = await this.getAll();
            obj.id = this.generateId();
            readFile.push(obj);
            this.writeData(readFile);
            return obj;
        } catch (err) {
            console.log(err);
        }
    }
    //Devuelve el objeto con el ID buscado
    async getById(id) {
        try {
            this.objects = await this.getAll();
            const obj = this.objects.find(el => el.id == id || el.id === Number(id));
            return obj ? obj : null;
        } catch (err) {
            console.log(err);
        }
    }


    //Modifica un objeto
    async modify(id,objMod) {
        try {
            objMod["id"]=id
            const elementos = await this.getAll();
            const obj = elementos.find(el => el.id == id ||  el.id === Number(id));
            if(!obj)
                throw new Error('no existe el id '+id)
             const elementosModificados=elementos.map(item =>{
                if( item.id == id || item.id === Number(id)  )
                   return objMod
                return item
            })
            this.writeData(elementosModificados);
            return objMod
        } catch (err) {
            console.log(err);
            return {}
        }
    }
    //Devuelve un array con los objetos presentes en el archivo
    async getAll() {
        try {
            const data = await this.readData(this.fileName);
            return data;
        } catch (err) {
            return []
        }
    }
    //Elimina del archivo el objeto con el ID buscado
    async delete(id) {
        try {
            const filterObjects= this.objects.filter(el => el.id != Number(id));
            this.writeData(filterObjects);
        } catch (err) {
            console.log(err);
        }
    }
    
    readData(path) {
        const data = JSON.parse(fs.readFileSync(path, 'utf-8'));
        return data;
    }
    writeData(objects) {
        fs.writeFileSync(this.fileName, JSON.stringify(objects, null, 2));
        this.objects=objects
    }
}

module.exports = CRUD;