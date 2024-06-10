//rootRouter.js
const router = require("express").Router();
const rootController = require('../controllers/rootController')

router.get('/', rootController.get);
router.post('/', rootController.post);

//ABOUT page
router.get('/about', rootController.getAbout);

module.exports = router;

