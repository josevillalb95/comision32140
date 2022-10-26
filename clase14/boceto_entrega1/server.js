import express from "express";
import routerProduct from "./router/products.router";
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos',routerProduct)

app.use('/api/cart',()=>{

})

app.use('*',()=>{
    res.send( { error :  -1, descripcion: "ruta 'x' método 'y' no autorizada" })
})

const server = app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
server.on('error', err => console.log(err));