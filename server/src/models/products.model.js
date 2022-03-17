const { Schema, mongoose } = require('mongoose')

const productsModel = new Schema({
    nome:{
        type: String
    },
    tipo:{
        type: String,
    },
    fornecedor: {
        type: String
    }
})


mongoose.model('product', productsModel);