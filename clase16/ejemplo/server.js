
const options = {
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'nov_1'
	}
}

const knex= require('knex')(options)
// knex.schema.createTable('books', (table) => {
//     table.increments('id')
//     table.string('title')
//     table.string('author')
//     table.integer('year')
// })
// .then(a => console.log({a}))
// .catch(e=>console.log(e.sqlMessage))


// knex
// .from('books')
// .insert({ title: 'clase 1 nov bis' ,author: 'jose bis ',year: 2023 })
// .then(id => console.log( `insertado id: ${id[0]}`))
// .catch(e=>console.log({e}))

// knex
// .from('books')
// .where({ year: 2023 })
// .update({ year: 2011 })
// .then(rep => console.log({rep}))
// .catch(e=>console.log({e}))

const mostrar=()=>{
    knex
    .from('books')
    .select('title', 'author', 'year')
    .orderBy('year','desc')
    .then( lista => lista.forEach(element => {
        console.log(element)
    }))
    .then( a =>console.log('--') )
}

mostrar()

// knex
// .from('books')
// .where({ year: 2011 })
// .del()
// .then(a=>{
//     console.log('eliminado',a)
//     mostrar()
// })
// .catch(e=>console.log({e}))
