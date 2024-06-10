//rootRouter.js
const router = require("express").Router();
const rootController = require('../controllers/rootController')

router.get('/', rootController.get);
router.post('/', rootController.post);


module.exports = router;

