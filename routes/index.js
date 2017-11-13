var express = require('express');
var router = express.Router();
import MyController from '../controllers/templateController'

/* GET home page. */
router.get('/', MyController.home )
router.get('/list', MyController.getList)
router.get('/userform', MyController.userform)

module.exports = router;
