import mongoose from "mongoose";
import { HttpError } from "../utils/HttpError.js";

/**
 * Si ninguna ruta ha respondido, la ruta no existe: pasa un HttpError 404 al errorHandler.
 *
 * @param {Object} req - Usa el método y la URL para el mensaje
 * @param {Object} res - No lo usa
 * @param {Function} next - Siempre next(HttpError 404)
 */
export const notFound = (req, res, next) => {
  next(new HttpError(404, `No existe la ruta ${req.method} ${req.originalUrl}`));
};

/**
 * Manejador de errores centralizado.
 *
 * Traduce cada tipo de error a una respuesta { error } (y details en los de validación):
 * HttpError → su status · ValidationError → 400 · CastError → 400 · code 11000 → 409 ·
 * JSON mal escrito → 400 · cualquier otro → 500.
 *
 * Express lo reconoce como manejador de errores porque recibe 4 parámetros.
 * Va el ÚLTIMO en index.js y recibe cualquier error: los que lanzamos nosotros
 * (HttpError) y los que lanzan Mongoose o Express.
 *
 * @param {Error} err - El error lanzado (throw) o pasado con next(error)
 * @param {Object} req - No lo usa
 * @param {Object} res - Responde con el status y el mensaje correspondientes
 * @param {Function} next - Obligatorio en la firma (4 parámetros = manejador de errores), aunque no se use
 */
export const errorHandler = (err, req, res, next) => {
  // 1. Nuestros errores: ya traen su código
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message });
    return;
  }

  // 2. Validación de Mongoose (required, min, max, enum...) → 400 con el error de cada campo
  if (err instanceof mongoose.Error.ValidationError) {
    const details = {};
    for (const [field, fieldError] of Object.entries(err.errors)) {
      details[field] = fieldError.message;
    }
    res.status(400).json({ error: "Hay datos que no son válidos", details });
    return;
  }

  // 3. Id mal formado (por ejemplo /api/bugs/patata) → 400
  if (err instanceof mongoose.Error.CastError) {
    res.status(400).json({ error: `"${err.value}" no es un id válido` });
    return;
  }

  // 4. Email o username repetido: MongoDB lanza un error con code 11000 → 409
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue ?? {})[0] ?? "dato";
    res.status(409).json({ error: `Ese ${field} ya está registrado` });
    return;
  }

  // 5. JSON mal escrito en el body de la petición → 400
  if (err.type === "entity.parse.failed") {
    res.status(400).json({ error: "El body no es un JSON válido" });
    return;
  }

  // 6. Cualquier otro error: lo vemos en la consola, pero al cliente no le damos detalles
  console.error(err);
  res.status(500).json({ error: "Error interno del servidor" });
};