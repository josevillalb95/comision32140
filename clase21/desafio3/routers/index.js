const { Router } = require("express");
const router = Router()
const userController = require('../controllers/user.controller')
router.use('/users',userController)
module.exports =router