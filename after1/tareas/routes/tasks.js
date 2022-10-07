const { Router} = require("express");
const router = Router();
const CRUD=require('../server/index')
const tareasFunction=new CRUD('task_database.txt')

router.get("/list", async(req,res)=>{
  const tasks = await tareasFunction.getAll()
  res.render("tasks/list", {
    tasks,
  });
});

router.get("/edit/:id",async (req,res)=>{
  const { id } = req.params;
  const task =  await tareasFunction.getById(id)
  const formInfo={
    botonName:"Actualizar",
    metodo:"PUT",
    url:"/tasks/edit/"+id
  }
  return res.render("tasks/formTareas", { task , ...formInfo});
});

router.get("/create", (req, res) => {
  const formInfo={
    botonName:"Crear",
    metodo:"POST",
    url:"/tasks/create"
  }
  res.render("tasks/formTareas",formInfo);
});


router.get("/delete/:id", async(req,res)=>{
  try{
    const { id } = req.params;
    await tareasFunction.delete(id)
    res.redirect("/tasks/list");
  }
  catch(e){
    res.redirect("/error");
  }

});

router.post("/create", async (req,res)=>{
  try {
    const { title, description } = req.body;
    await tareasFunction.create({title,description})
    res.redirect("/tasks/list");
  } catch (errors) {
    res.redirect("/error");
  }
});
router.put("/edit/:id",async (req,res)=>{
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    await tareasFunction.modify(id,{title,description})
    res.redirect("/tasks/list");
  } catch (errors) {
    res.redirect("/error");
  }
});

module.exports =router;
