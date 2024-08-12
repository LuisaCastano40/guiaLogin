import express from 'express';

const app = express();

app.listen(port, ()=>{
    console.log(`El puerto se está escuchando en: http://localhost:${port}`)
}); 