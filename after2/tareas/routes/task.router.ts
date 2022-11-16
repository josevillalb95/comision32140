import {Router} from 'express'
import {  renderCreate,renderEdit,renderList,createTask,editTask, removeTask} from '../controller/task.controller';
import { validFormTask } from '../middlewares/validBody.middleware';
const routerTask = Router();
routerTask.get("/list", renderList);
routerTask.get("/create", renderCreate);
routerTask.get("/edit/:id",renderEdit);
routerTask.post("/create", validFormTask,createTask);
routerTask.post("/edit/:id",validFormTask,editTask);
routerTask.get("/delete/:id",removeTask);
export default routerTask
