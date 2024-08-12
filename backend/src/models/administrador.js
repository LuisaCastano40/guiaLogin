// 1. Importacion de dependencias y módulos
import mongoose from 'mongoose';

const administradorSchema = new mongoose.Schema({
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
    },
    categoriaAdmin: {
        type: Boolean,
        required: true,
        default: true
    }

});


export const administradorModel = mongoose.model('usuario', administradoSchema);
