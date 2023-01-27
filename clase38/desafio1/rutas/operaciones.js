import { Router } from "express";
import {auth} from './middlewares/index.js'
import {suma,resta,listar} from '../controller/index.js'
const routerOperaciones=Router()

routerOperaciones.get('/suma',suma)
routerOperaciones.get('/resta',resta)
routerOperaciones.get('/listar',auth,listar)

export {routerOperaciones }