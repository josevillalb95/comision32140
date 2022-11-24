const router = require('express').Router();
const { setCookie, getCookie, clearCookie } = require('../controller/cookiesController');

router.get('/create', setCookie);
router.get('/get', getCookie);
router.get('/delete', clearCookie);

module.exports = router;