/**
 * Un error que sabe con qué código HTTP responder.
 *
 * Se lanza desde controladores (throw) o middlewares (next(error))
 * y lo convierte en respuesta el errorHandler.
 *
 * @example
 * throw new HttpError(404, "Ese bug no existe");        // en un controlador
 * return next(new HttpError(401, "No hay token"));      // en un middleware
 */
export class HttpError extends Error {
  /**
   * @param {number} status - Código HTTP de la respuesta (400, 401, 403, 404...)
   * @param {string} message - Mensaje para el cliente
   */
  constructor(status, message) {
    super(message);
    this.name = "HttpError";
    this.status = status;
  }
}