const { Router } = require("express");
const HTTP_STATUS = require("../constants/api.constants");
const userService = require("../services/user.service");
const service= new userService()
const router = Router()
router.get("/",(req,res)=>{
    const users = service.getAll()
    res.status(HTTP_STATUS.OK).json(users)
})
router.get("/:id",(req,res)=>{
    const {id}=req.params
    const user= service.getOne(id)
    res.status(HTTP_STATUS.OK).json(user)

})
router.post("/popular",(req,res)=>{
    service.populate(req.query.limit)
    res.status(HTTP_STATUS.CREATED).json({create:true})
})
module.exports =router