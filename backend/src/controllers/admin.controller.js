import { adminModel } from "../models/admin.model.js";
import bcrypt from 'bcryptjs';
// crear y mostrar todos y eliminar

// petición POST para crear administradores
export const postAdmin = async (request, response) => {
    try{

        const {nombreCompleto, correo, contrasena} = request.body;
        const codedPasword = await bcrypt.hash(contrasena, 10);

        const newAdmin = await adminModel.create({
            nombreCompleto,
            correo,
            contrasena:codedPasword,
            categoriaAdmin: true
        })

        return response.status(201).json({
            estado: '201',
            mensaje: 'Administrador creado correctamente',
            datos: newAdmin
        })
    } catch(error){
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al crear un administrador',
            datos: error
        })
    }
}

// Mostrar todos los administradores
export const getAdmin = async (request, response) => {
    try{
        // -> encontrar -> find()
        const allAdmins = await adminModel.find();
        // validadr si no hay usuarios
        if(allAdmins.length === 0){
            return response.status(200).json({
                estado: '200',
                mensaje: 'No se encontraron administradores en la base de datos',
                datos: null
            })
        }

        return response.status(200).json({
            estado: '200',
            mensaje: 'Estos son todos los administradores encontrados',
            cantidadAdmins: allAdmins.length,
            admins: allAdmins
        })

    }catch(e){
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al buscar los administradores',
            datos: error
        })
    }
}

// Eliminar administradores
export const deleteAdminById = async (request, response) => {

    try {
        let idForDelete = request.params.id
        const adminDeleted = await adminModel.findByIdAndDelete(idForDelete);
        // TAREITA: AGREGUE VALIDACIONES QUE CONSIDERE NECESARIAS
    
        return response.status(200).json({
            estado:'200',
            mensaje: 'Administrador eliminado Correctamente',
            datos: null
        })
       } catch (error) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al eliminar administrador',
            datos: error,
        })
       }
}