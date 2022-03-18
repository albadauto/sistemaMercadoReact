const mongoose = require('mongoose');
require('../models/products.model');
const productsModel = mongoose.model('product');


exports.index = async (req,res,next) => {
    try{
        const result = await productsModel.find({});
        if (result.length > 0){
            res.json({
                result
            })
        }else{
            res.json({
                search: false
            })
        }
    }catch(err){
        console.log(err)
    }
}

exports.insertProduct = async (req,res,next) => {
    try{
        const insert = {
            nome:req.body.nome,
            fornecedor: req.body.fornecedor,
            tipo:req.body.tipo
        }
        await productsModel.create(insert);
        res.json({
            inserted: insert,
            error: false
        })
    }catch(err){
        console.log(err)
    }
}