import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    dishes: {
      type: Schema.Types.ObjectId,
      ref: 'Dish',
    },
  });
  
  // Creamos el modelo Menu basado en el esquema menuSchema
  const MenuModel = mongoose.model('Menu', menuSchema);


//   {
//     "title": "Dinner Menu",
//     "dishes": "64b7f8a1a3c36f08c5df524a",
//     
//   }
  