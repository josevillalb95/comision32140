const { Router } = require("express");
const MockService = require('../service/mock.service');
const { successResponse } = require("../utils/api.utils");
const HTTP_STATUS =require('../constants/api.constants')
const router = Router();
const service= new MockService()

router.get("/test", (req,res)=>{
  const users = service.getAll(req.query.cant);
  const response = successResponse(users);
  res.status(HTTP_STATUS.OK).json(response);
});


module.exports = router;
