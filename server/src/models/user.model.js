const { Schema, mongoose } = require('mongoose')

const userModel = new Schema({
    email:{
        type: String
    },
    senha:{
        type: String,
    },
    cpf: {
        type: String
    }
})


mongoose.model('user', userModel);