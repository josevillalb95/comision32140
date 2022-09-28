const http = require('http');
const PORT = 8080;

const getSaludo=()=>{
    let hora = new Date().getHours();
    if (hora >= 6 && hora <= 12) 
        return '<h1>Buenos días!</h1>'
    if (hora >= 13 && hora <= 19) 
        return '<h1>Buenas tardes!</h1>'
    return '<h1>Buenas noches!</h1>'
}
const server = http.createServer((req, res) => {
    return res.end( getSaludo() )

    // es lo mismo que 
    // res.write(getSaludo() ); 
    // res.end()

})

server.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));