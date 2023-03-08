import {Router} from '../deps.ts'
import * as controller  from '../controller/index.ts'
export const router = new Router()
    .get('/api/productos',controller.findProducto)
    .get('/api/productos/:id',controller.findProducto)
    .delete('/api/productos/:id',controller.deleteProducto)
    .put('/api/productos/:id',controller.updateProducto)
    .post('/api/productos',controller.createProducto)

