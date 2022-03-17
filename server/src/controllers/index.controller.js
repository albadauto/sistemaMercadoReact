const mongoose = require('mongoose');
require('../models/user.model');
const userModel = mongoose.model('user');
const jwt = require('jsonwebtoken');


exports.isValidPassword = async (req,res,next) => {
    try{
        const result = await userModel.find({email:req.body.email, senha: req.body.senha});
        if (result.length > 0){
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

exports.createAdmin = (req,res,next) => {
    const insert = {
        email: 'root@root',
        senha: 'root'
    }
    userModel.create(insert).then(() => {
        res.json({
            message: 'Inserido com sucesso'
        })
    })

    next();
}


