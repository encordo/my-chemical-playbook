/**
 * ¿Puede editar o borrar el recurso? Solo un admin.
 *
 * @param {Object|string} user - El id del usuario, como ObjectId o como string
 * @returns {boolean} true si es admin
 */
export function isAdmin(user) {
  return user.admin;
}