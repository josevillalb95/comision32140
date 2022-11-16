import {Router} from 'express'
import { renderError } from '../controller/error.controller';
const routerError = Router();
routerError.get("/", renderError);
export default routerError
