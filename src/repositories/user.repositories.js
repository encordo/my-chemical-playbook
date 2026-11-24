import { UserModel } from "../models/user.model.js";

// El repositorio es el ÚNICO sitio que habla con el modelo (Mongoose).
// Los controladores le piden datos con funciones de nombre claro.

/**
 * Crea un usuario.
 *
 * @param {Object} data - username, email, password (YA cifrada) y role
 * @returns {Promise<Object>} El usuario creado
 */
const createUser = async (data) => {
  return UserModel.create(data);
};

/**
 * Busca un usuario por email, incluyendo la contraseña (para el login).
 *
 * La contraseña tiene select: false en el esquema, así que hay que pedirla con "+password".
 *
 * @param {string} email - El email (se busca en minúsculas)
 * @returns {Promise<Object|null>} El usuario con su contraseña, o null si no existe
 */
const getUserByUsername = async (username) => {
  return UserModel.findOne({ username }).select("+password");
};

/**
 * Busca un usuario por su _id (para /auth/me).
 *
 * @param {string} id - El _id del usuario
 * @returns {Promise<Object|null>} El usuario sin contraseña, o null si no existe
 */
const getUserById = async (id) => {
  return UserModel.findById(id);
};

export { createUser, getUserByUsername, getUserById };