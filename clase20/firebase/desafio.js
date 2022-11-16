const conect = require('./database/conection');
const CRUD = require('./crud')
conect().then(db =>{
	const collections = db.collection('colores')

    // const colores = [ 'yellow','red','blue']
    // colores.forEach( async (color) =>   await CRUD.create(collections,{color}) )

    // OTRA FORMA 
    
    // CRUD.create(collections,{color:'red'})
    // .then( ()=> CRUD.create(collections,{color:'yellow'}) )
    // .then( ()=> CRUD.create(collections,{color:'green'}) )
    // .then( ()=> CRUD.create(collections,{color:'blue'}) )
    // .then( ()=> CRUD.findAll(collections) )
    // .then( datos =>{
    //     console.log(datos)
    //     // return CRUD.update(collections,)
    // })

    CRUD.findAll(collections).then(datos=> {
        console.log(datos)
        return CRUD.update(collections,'ixCEtJwtJgzKfuq1j2rx',{color:"navy"})
    }).then( ()=> 
        CRUD.findAll(collections)
    )
    .then(datos=>  console.log(datos) )
})
