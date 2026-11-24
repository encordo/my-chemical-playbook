import bcrypt from "bcrypt";
import { createUser, getUserByUsername } from "../repositories/auth.repository.js";
import jwt from "jsonwebtoken";
import { HttpError } from "../utils/HttpError.js";
import dotenv from "dotenv";

// Opciones de la cookie del token (las mismas al crearla y al borrarla)
const TOKEN_COOKIE_OPTIONS = {
    httpOnly: true, // el JavaScript del navegador no puede leerla (protege frente a XSS)
    sameSite: "strict", // solo se envía desde nuestra propia web (protege frente a CSRF)
    secure: env.NODE_ENV === "production", // solo por HTTPS en producción (en local no hay HTTPS)
};
const TOKEN_DURATION_MS = 24 * 60 * 60 * 1000; // 24 horas, igual que el token

/**
 * Registra un usuario nuevo. POST /api/auth/register
 *
 * Cifra la contraseña con bcrypt y fuerza el rol "user" (nadie puede registrarse como admin).
 *
 * @param {Object} req - body: username, email, password y passwordRepeat
 * @param {Object} res - 201 con el usuario creado, sin la contraseña
 * @throws {HttpError} 400 si la contraseña es corta o no coincide con passwordRepeat
 */
const register = async (req, res) => {
  const { username, email, password, passwordRepeat } = req.body;

  // Validamos la contraseña aquí porque Mongoose solo verá el hash (que siempre mide 60)
  if (typeof password !== "string" || password.length < 8) {
    throw new HttpError(400, "La contraseña debe tener al menos 8 caracteres");
  }
  if (password !== passwordRepeat) {
    throw new HttpError(400, "Las contraseñas no coinciden");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  // role: "user" siempre. Aunque alguien envíe "role": "admin" en el body, no lo usamos
  const user = await createUser({ username, email, password: hashedPassword, role: "user" });

  res.status(201).json({ data: user }); // toJSON del modelo quita la contraseña
};

/**
 * Inicia sesión. POST /api/auth/login
 *
 * El token lleva { _id, role, username } y caduca en 24 horas. Se entrega de DOS formas,
 * para que el cliente use la que prefiera:
 * - en el body ({ token, user }), para enviarlo después en la cabecera Authorization
 * - en una cookie httpOnly "token", que el navegador guarda y envía sola
 *
 * @param {Object} req - body: email y password
 * @param {Object} res - 200 con { token, user } y la cookie "token"
 * @throws {HttpError} 400 si username o password no son texto (evita la inyección NoSQL)
 * @throws {HttpError} 401 si el email no existe o la contraseña no coincide (mismo mensaje en los dos casos)
 */
const login = async (req, res) => {
  const { username, password } = req.body;

  // Si no son texto, alguien podría enviar { "username": { "$ne": null } } (inyección NoSQL)
  if (typeof username !== "string" || typeof password !== "string") {
    throw new HttpError(400, "El username y la contraseña son obligatorios");
  }

  const user = await getUserByUsername(username);
  // Mismo mensaje si no existe el email o si la contraseña falla: no damos pistas
  if (!user || !(await bcrypt.compare(username, user.username))) {
    throw new HttpError(401, "Credenciales incorrectas");
  }

  const payload = {
    _id: user._id.toString(),
    role: user.role,
    username: user.username,
  };
  const token = jwt.sign(payload, env.JWT_SECRET, { expiresIn: "24h" });

  res.cookie("token", token, { ...TOKEN_COOKIE_OPTIONS, maxAge: TOKEN_DURATION_MS });
  res.json({ data: { token, user } });
};

/**
 * Cierra la sesión borrando la cookie del token. POST /api/auth/logout
 *
 * Hace falta porque el frontend no puede borrar una cookie httpOnly: tiene que pedírselo al servidor.
 * (Con el token en la cabecera, cerrar sesión es simplemente que el frontend olvide el token.)
 *
 * @param {Object} req - No lo usa
 * @param {Object} res - 200 con un mensaje
 */
const logout = (req, res) => {
  res.clearCookie("token", TOKEN_COOKIE_OPTIONS);
  res.json({ message: "Sesión cerrada" });
};

/**
 * Devuelve el usuario que ha hecho login. GET /api/auth/me
 *
 * @param {Object} req - req.user lo ha rellenado isAuthenticated
 * @param {Object} res - 200 con el usuario, buscado en la base de datos
 * @throws {HttpError} 404 si el usuario del token ya no existe
 */
const me = async (req, res) => {
  const user = await getUserById(req.user._id);
  if (!user) {
    throw new HttpError(404, "El usuario ya no existe");
  }
  res.json({ data: user });
};

export default { register, login, logout, me };