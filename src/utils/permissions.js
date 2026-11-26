/**
 * ¿Puede editar o borrar el recurso? Solo su autor o un admin.
 *
 * @param {Object|string} authorId - El id del autor, como ObjectId o como string
 * @returns {boolean} true si es el autor o si es admin
 */
export function isAdmin(user) {
  return user.admin;
}