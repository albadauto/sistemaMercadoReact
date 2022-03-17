const mongoose = require('mongoose');
require('../models/products.model');
const productsModel = mongoose.model('product');


exports.index = async (req,res,next) => {
    try{
        const result = await productsModel.find({});
        if (result.length > 0){
            res.json({
                search: result
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
            nome:'produto',
            fornecedor: 'sei la',
            tipo:'salguadin'
        }
        await productsModel.create(insert);
        res.json({
            inserted: insert
        })
    }catch(err){
        console.log(err)
    }
}