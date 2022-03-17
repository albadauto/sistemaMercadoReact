const { Router } = require('express');
const routerIndex = Router();
const verifyJWT = require('../middleware/jwt.middleware');
const userControler = require('../controllers/index.controller');


routerIndex.post('/', userControler.isValidPassword);

routerIndex.get('/createAdmin', userControler.createAdmin);

module.exports = routerIndex;