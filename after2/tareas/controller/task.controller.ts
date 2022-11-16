import {Request,Response} from 'express'
import * as TaskService from '../services/task.service'
import { orderArray } from '../utils/ordernar'
export const renderList=async(req:Request,res:Response)=>{
    const tasks = await TaskService.findTask()
    res.render("tasks/list", {tasks:orderArray(tasks,'title')});
}
export const renderEdit=async(req:Request,res:Response)=>{
    const { id } = req.params;
    const task =  await TaskService.findOneTask(id)
    const formInfo={
      botonName:"Actualizar",
      metodo:"POST",
      url:"/tasks/edit/"+id
    }
    return res.render("tasks/formTareas", { task , ...formInfo});
  }

export const renderCreate=(req:Request,res:Response)=>{
    const formInfo={
      botonName:"Crear",
      metodo:"POST",
      url:"/tasks/create"
    }
    res.render("tasks/formTareas",formInfo);
}

export const createTask=async(req:Request,res:Response)=>{
    try {
      const { title, description } = req.body;
      await TaskService.createTask({title,description})
      res.redirect("/tasks/list");
    } catch (errors) {
      res.redirect("/error");
    }
};

export const editTask=async(req:Request,res:Response)=>{
  try {
    const { title, description } = req.body;
    const { id } = req.params;
    await TaskService.updateTask(id ,{ title, description })
    res.redirect("/tasks/list");
  } catch (errors) {
    res.redirect("/error");
  }
};


export const removeTask=async(req:Request,res:Response)=>{
  try {
    const { id } = req.params;
    await TaskService.deleteTask(id)
    res.redirect("/tasks/list");
  } catch (errors) {
    console.log({errors})
    res.redirect("/error");
  }
};