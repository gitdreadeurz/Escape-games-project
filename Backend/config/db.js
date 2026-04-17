import mysql from 'mysql2/promise.js';
import dotenv from 'dotenv';

dotenv.config();

export const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

try {
    console.log('Connexion à la base de données réussie !');
} catch (error) {
    console.error('Erreur de connexion à la base de données :', error);
}