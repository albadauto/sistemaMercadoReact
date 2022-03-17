const { Router } = require('express');
const routerIndex = Router();
const verifyJWT = require('../middleware/jwt.middleware');
const { verifyLogin } = require('../controllers/index.controller');


routerIndex.post('/', verifyLogin);

routerIndex.get('/teste', verifyJWT, (req,res) => {
    res.send("Boa");
})

module.exports = routerIndex;