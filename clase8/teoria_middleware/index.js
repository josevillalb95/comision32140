
const express = require('express');
const app = express();
const port = 3000;
// Permite recibir parámetros en formato JSON.
// middleware que nos da esa funcionalidad 
app.use(express.json());

// middeware de funcioanlidad 
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});


// Middlewa que verifica si el usuario es un administrador.
function isAdmin(req, res, next) {
  if (req.body.isAdmin) {
    // le digo que continue a la sig funcion
    next();
  } else {
    // si no es admin retorno un status
    res.status(403).send(`ruta ${req.url}  solo para admin`);
  }
}
// Se agrega el middleware en la aplicación.
// Ruta a la cual solo deben ingresar usuarios administradores.
app.post('/dashboard', isAdmin ,(req, res,next) => {
  res.send('You are an admin');
});



function addOne(req,res,next){
  req.data=[]
  req.data.push("agrego data 1")
  next()
}
function addTwo(req,res,next){
  req.data.push("agrego data 2")
  next()
}
function modParams(req,res,next){
 if(!req.query.name)
    req.query.name='SIN NOMBRE'
  else
    req.query.name+=' modificado'
  next()
}
app.get('/add', addOne,addTwo,modParams ,(req, res) => {
  const {data,query}=req
    res.json({data,query});
});
  


// en este ejemplo le digo a cualquier ruta 
// que no entraste antes 
// retorna un next pero con error 
app.get('*', (req, res, next) => {
  next('ruta no existe: '+req.path,req,res,next)
})
// agarro el next con error de arriba 
// y retorno el error que me mando 
// middeware de funcioanlidad error
app.use(function(err,req,res,next){
  return res.status(400).send(err)
});
// fin

app.listen(port, () => {
  console.log(`Server listeting on port ${port}`)
});