//1. importamos las dependencias y módulos que necesitamos
import express from 'express';
import dotenv from 'dotenv';
import connectionMongo from './config/dataBase.js';
import cors from 'cors'

//2.Configurar el uso de nuestro servidor y de nuestras variables de
const app = express();
dotenv.config(); 
const port = process.env.PORT;
// connectionMongo();
app.use(cors());
app.use(express.json());


//3. escuchar nuestro servidor (ejecutarlo)
app.listen(port, ()=>{
    console.log(`El servidor se está escuchando en: http://localhost:${port}`);
});