// 1. importaciones
import mongoose from 'mongoose';

// funcion flecha
const variable = async () => {}

// funcion declarativa
export async function connectionMongo (){

    try{
        await mongoose.connect(process.env.URL_DATABASE, {})
        console.log('Conexión exitosa con la base de datos');

    }catch(error){
        console.error('Error de conexión: ' , error);
    }

}