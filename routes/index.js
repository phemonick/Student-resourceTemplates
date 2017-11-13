var express = require('express');
var router = express.Router();
import MyController from '../controllers/templateController'

/* GET home page. */
router.get('/', MyController.home )
router.get('/list', MyController.getList)
router.get('/userform', MyController.userform)
router.post('/details/:id', MyController.userDetails)
router.post('/edit/:id', MyController.editUser)

module.exports = router;
