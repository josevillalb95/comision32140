const { Router } = require("express");
const usersRoutes = require("../controllers/users.controller");

const router = Router();

router.use("/users", usersRoutes);

module.exports = router;
