import { verifyToken } from "../lib/jwt.js";

const auth = (requiredRole) => {
  return async (req, res, next) => {
    let token = req.headers['authorization'];
    if (!token) {
      console.log('No token provided');
      return res.status(401).json({ message: 'No token provided' });
    }

    // Extraemos el toquen porque viene así: Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    token = token.split(" ")[1];
    if (!token){return res.status(400).send({ response: "Usuario no autorizado" });}


    try {
      const decoded = await verifyToken(token);
      console.log('Token decoded:', decoded);

      // verificamos rol
      if (requiredRole === 'admin' && !decoded.isAdmin) {
        return res.status(403).json({ message: 'Access denied' });
      }

      req.user = decoded;
      next();
    } catch (error) {
      // console.log('Failed to authenticate token:', error);
      return res.status(401).json({ message: 'Failed to authenticate token ' + error.message });
    }

  }
};

export default auth;
