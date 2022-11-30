const router = require('express').Router();
const { root, olvidar } = require('../controller/sessionController');

router.get('/root', root);
router.get('/olvidar',olvidar);

module.exports = router;