// 1. Importacion de dependencias y módulos
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombreCompleto:{
        type: String,
        required: true
    },
    correo:{
        type:String,
        required: true,
        unique: true
    },
    contrasena:{
        type:String,
        required: true
    },
    imagen: {
        type: String,
        required: false
    }

});


export const userModel = mongoose.model('usuario', userSchema);
