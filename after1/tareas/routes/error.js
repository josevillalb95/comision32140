const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("error",{errorMsj:'No se puedo actualizar el archivo'});
});

module.exports =router;
