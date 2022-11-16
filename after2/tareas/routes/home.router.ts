import {Router} from 'express'
import { renderHome } from '../controller/home.controller';
const routerHome = Router();
routerHome.get("/", renderHome);
export default routerHome
