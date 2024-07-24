import { userModel } from "../models/user.model.js"

// Crear, actualizar y elimimar usuarios, poder visualizar todos mis usuarios o un solo usuario

// petrición POST para crear usuarios -> son funciones
// función declarada -> función flecha

export const postUser = async (request, response) => {

    try {
        const newUser = await userModel.create(request.body);
        // La solicitud ha tenido éxito y se ha creado un nuevo recurso. 
        return response.status(201).json({
            resultado: 'ok',
            mensaje: 'usuario creado correctamente',
            datos: newUser,
        });
    } catch (error) {
        // La solicitud contiene sintaxis incorrecta o no puede ser procesada.
        return response.status(400).json({
            resultado: 'error',
            mensaje: 'ocurrió un error al crear usuario',
            datos: error,
        });
    }
}

// Mostrar todos los usuarios
export const getUsers = async (request, response) => {
    return response.send('Funciona la petición GET de TODOS los usuarios');
}

// Mostrar un solo usuario
export const getUserById = async (request, response) => {
    return response.send('Funciona la petición GET de Un solo usuario');
}

// Actualizar usuario
export const putUserById = async (request, response) => {
    return response.send('Funciona la petición PUT de los usuarios');
}

//  Eliminar usuario
export const deleteUserById = async (request, response) => {
    return response.send('Funciona la petición DELETE de los usuarios');
}