const { createFakeUser } = require("../utils/fakerUser.utils")
class userService {
    constructor(){
        this.items=[]
    }
    getAll(){
        return  this.items
    }
    getOne(id){
        return this.items.find(item => item.id==id)
    }
    insert(obj){
        this.items.push(obj)
    }
    populate(limit=50){
        for (let index = 1; index < limit; index++) {
            this.insert( createFakeUser() )
        }
    }

}
module.exports= userService