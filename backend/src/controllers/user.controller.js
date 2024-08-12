import { userModel } from "../models/user.model.js";
import bcrypt from 'bcryptjs';

// Crear, actualizar y elimimar usuarios, poder visualizar todos mis usuarios o un solo usuario

// petrición POST para crear usuarios -> son funciones
// función declarada -> función flecha

export const postUser = async (request, response) => {

    try {

        const {nombreCompleto, correo, contrasena} = request.body;
        const codedPasword = await bcrypt.hash(contrasena, 10);

        const newUser = await userModel.create({
            nombreCompleto,
            correo,
            contrasena:codedPasword
        });

        return response.status(201).json({
            estado: '201',
            mensaje: 'Usuario creado correctamente',
            datos: newUser
        })
    } catch (error) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al crear un usuario',
            datos: error
        })
    }
}

// Mostrar todos los usuarios
export const getUsers = async (request, response) => {

    try {
        // -> encontrar -> find()
        const allUsers = await userModel.find();
        // validadr si no hay usuarios
        if (allUsers.length === 0) {
            return response.status(200).json({
                estado: '200',
                mensaje: 'No se encontraron usuarios en la base de datos',
                datos: null
            })
        }

        return response.status(200).json({
            estado: '200',
            mensaje: 'Estos son todos los usuarios encontrados',
            cantidadUsuarios: allUsers.length,
            usuarios: allUsers
        })

    } catch (e) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al buscar los usuarios',
            datos: e
        })
    }
}

// Mostrar un solo usuario
export const getUserById = async (request, response) => {
    try {
        let idForGet = request.params.id
        // validar id
        if(idForGet === ':id' ){
            return response.json({
                mensaje: 'Debe ingresar un id válido',
                id: idForGet
            })
        }

        // -> encontrar -> find()
        const userById = await userModel.findById(idForGet);

        //validación cuando no se encuentra el usuario buscado
        if(!userById){
            return response.status(200).json({
                estado: '200',
                mensaje: "No se encontró ese usuario",
                dato: userById
            })
        }


        return response.status(200).json({
            estado: '200',
            mensaje: 'Se encontró el usuario buscado',
            usuario: userById
        })

    } catch (error) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al buscar un solo usuario',
            datos: error,
        })
    }
}

// Actualizar usuario
export const putUserById = async (request, response) => {
    try {
        let idForPut = request.params.id
        const dataForUpdate = request.body
        const userUpdated = await userModel.findByIdAndUpdate(idForPut, dataForUpdate);

        // TAREITA: AGREGUE VALIDACIONES QUE CONSIDERE NECESARIAS
        return response.status(200).json({
            estado: '200',
            mensaje:'Se actualizó correctamente',
            datos: userUpdated
        })
        
    } catch (error) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al actualizar usuario',
            datos: error,
        })
    }
}

//  Eliminar usuario
export const deleteUserById = async (request, response) => {
   try {
    let idForDelete = request.params.id
    const userDeleted = await userModel.findByIdAndDelete(idForDelete);
    // TAREITA: AGREGUE VALIDACIONES QUE CONSIDERE NECESARIAS

    return response.status(200).json({
        estado:'200',
        mensaje: 'Usuario eliminado Correctamente',
        datos: null
    })
   } catch (error) {
    return response.status(400).json({
        estado: '400',
        mensaje: 'Ocurrió un problema al eliminar usuario',
        datos: error,
    })
   }
}