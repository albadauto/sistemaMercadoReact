const { Router } = require('express');
const mainRouter = Router();
const mainController = require('../controllers/main.controller');
const verifyJWT = require('../middleware/jwt.middleware');


mainRouter.get('/', mainController.index)
mainRouter.post('/insertProduct', mainController.insertProduct)


module.exports = mainRouter;