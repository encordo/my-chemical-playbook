import mongoose from "mongoose";
import { env } from "./env.js";

/**
 * Construye la cadena de conexión a partir de las variables del .env.
 *
 * encodeURIComponent: por si el usuario o la contraseña tienen caracteres especiales (@, :, /...).
 *
 * @returns {string} Por ejemplo: mongodb://user:1234@bugpedia-mongo:27017/bugpedia?authSource=admin
 */
const buildMongoUri = () => {
  const user = encodeURIComponent(env.MONGO_USER);
  const password = encodeURIComponent(env.MONGO_PASSWORD);
  return `mongodb://${user}:${password}@${env.MONGO_HOST}:27017/${env.MONGO_DB}?authSource=${env.MONGO_AUTH_SOURCE}`;
};

/**
 * Conecta a MongoDB una sola vez al arrancar. Si no puede, detiene la aplicación (process.exit).
 *
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    await mongoose.connect(buildMongoUri());
    console.log(`✅ Conectado a MongoDB (${env.MONGO_DB}@${env.MONGO_HOST})`);
  } catch (error) {
    console.error("❌ Error de conexión:", error.message);
    process.exit(1);
  }
};

export default connectDB;