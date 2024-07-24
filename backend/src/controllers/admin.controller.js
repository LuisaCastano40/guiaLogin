import { adminModel } from "../models/admin.model.js";
// crear y mostrar todos y eliminar

// petición POST para crear administradores
export const postAdmin = async (request, response) => {
    try {
        const newAdmin = await adminModel.create({
            ...request.body,
            categoriaAdmin: true
        });
        // La solicitud ha tenido éxito y se ha creado un nuevo recurso. 
        return response.status(201).json({
            resultado: 'ok',
            mensaje: 'administrador creado correctamente',
            datos: newAdmin,
        });
    } catch (error) {
        // La solicitud contiene sintaxis incorrecta o no puede ser procesada.
        return response.status(400).json({
            resultado: 'error',
            mensaje: 'ocurrió un error al crear administrador',
            datos: error,
        });
    }
}

// Mostrar todos los administradores
export const getAdmin = async (request, response) => {
    return response.send('Funciona la petición GET de TODOS los admin');
}

// Eliminar administradores
export const deleteAdminById = async (request, response) => {
    return response.send('Funciona la petición DELETE de un admin');
}