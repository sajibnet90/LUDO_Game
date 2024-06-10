//ludoRouter.js
const router = require("express").Router();
const ludoController = require('../controllers/ludoController')
//route router
router.get('/', ludoController.root);
router.get('/:ROOMCODE', ludoController.room);

module.exports = router;
