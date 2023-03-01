const Router = require('koa-router')
const router = new Router({ prefix:'/book'})

const books = [
    { id: 101, name: 'Fight Club', author: 'Chuck Palahniuk' },
    { id: 102, name: 'Sharp Objects', author: 'Gillian Flynn' },
    { id: 103, name: 'Frankenstein', author: 'Mary Shelley' },
    { id: 104, name: 'Into The Willd', author: 'Jon Krakauer' },
]


router.get('/', ctx => {
    ctx.body=books
})

router.delete('/:id', ctx => {
    const id=ctx.params.id
    const index=books.findIndex(book=> book.id == id)
    if(!index && index != 0 )
        return  ctx.response.status=404
    books.splice(index,1)
    ctx.response.status=200
    ctx.body={
        status:'success',
        messeage:'delete book'
    }

})

router.post('/',ctx =>{
    const { id, name, author }=ctx.request.body
    books.push( { id, name, author })
    ctx.response.status=201
    ctx.body={
        status:'success',
        messeage:'add book'
    }
})


module.exports = router
