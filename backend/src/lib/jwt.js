import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'secretKey';

// Function to generate a token
export function generateToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretKey, { expiresIn: '1h' }, (error, token) => {
      if (error) {
        reject(new Error('Error generating the token: ' + error.message));
      } else {
        resolve(token);
      }
    });
  });
}

// Function to verify a token
export function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        reject(new Error('Error verifying the token: ' + error.message));
      } else {
        resolve(decoded);
      }
    });
  });
}
