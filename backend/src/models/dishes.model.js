import mongoose from 'mongoose';


// Definimos el esquema de Dish (Plato)
const dishSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  });
  
  // Creamos el modelo Dish basado en el esquema dishSchema
  export const DishModel = mongoose.model('Dish', dishSchema);