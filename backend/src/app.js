// 1. Importar dependencias y módulos
import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectionMongo } from './config/dataBase.js';
import userRouter from './routes/user.routes.js';
import adminRouter from './routes/admin.routes.js';
import loginRouter from './routes/login.routes.js';

// 2. Hacer las configuraciones
const app = express();
dotenv.config();
// cors -> middlewares -> intemediario (mesero)
app.use(cors());

const port = process.env.PORT || 9000 ;
// Condicional ternario
// const port = process.env.PORT ? process.env.PORT : 6000;

connectionMongo();
app.use(json())
app.use('/users', userRouter);
app.use('/admin', adminRouter);
app.use('/login', loginRouter);

// 3. Escuchar nuestro servidor para poder ejecutar el app
app.listen(port, ()=>{
    console.log(`El puerto se está escuchando en: http://localhost:${port}`)
}); 