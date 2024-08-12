// importar dependencias
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/jwt.js';
import { userModel } from '../models/user.model.js';


const loginService = async (request, response) => {
    try {
        const { username, password } = request.body;

        // Buscar el usuario por correo electrónico
        const userFound = await userModel.findOne({ correo: username });

        // Validar que haya un usuario en la base de datos con ese correo
        if (!userFound) {
            return response.status(404).json({
                estado: '404',
                mensaje: 'Usuario no encontrado, por favor registrarse',
                datos: null,
            });
        }

        // Comparar la contraseña proporcionada con la almacenada
        const validPassword = await bcrypt.compare(password, userFound.contrasena);

        if (!validPassword) {
            return response.status(400).json({
                estado: '400',
                mensaje: 'Acceso denegado, contraseña incorrecta',
                datos: null,
            });
        }

        // Generar payload a enviar
        const payload = {
            id: userFound._id,
            name: userFound.nombreCompleto,
        };

        // Modificar el payload en caso de que sea administrador
        if (userFound.__t === 'Admin' || userFound.categoriaAdmin) {
            payload.isAdmin = true;
        }

        // Generar Token
        const token = await generateToken(payload);

        return response.status(200).json({
            estado: '200',
            mensaje: 'Inicio de sesión exitoso',
            datos: token,
        });

    } catch (error) {
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un error al iniciar sesión',
            datos: error,
        });
    }
}

export default loginService;