const mongoose = require('mongoose');
require('../models/user.model');
const userModel = mongoose.model('user');
const jwt = require('jsonwebtoken');


const verifyLogin = async (req,res,next) => {
    try{
        const result = await userModel.find({email:req.body.email, senha: req.body.senha});
        if (true){
            const token = jwt.sign({userID: result._id}, process.env.SECRET, {expiresIn: 300});
            res.json({
                isLogged: true,
                token
            })
        }else{
            res.json({
                isLogged:false,
            })
        }
    }catch(err){
        console.log(err);
    }
    next();
}


module.exports = {
    verifyLogin,
}