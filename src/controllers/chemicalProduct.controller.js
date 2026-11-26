//import { Types } from "mongoose";
import { getExperimentById, saveExperiment } from "../repositories/experiment.repository.js";

import { isAdmin } from "../utils/permissions.js";
import { HttpError } from "../utils/HttpError.js";

/**
 * Añade un producto químico a un experimento. POST /api/experiments/:id/chemicalProducts
 *
 *
 * @param {Object} req - 
 * @param {Object} res - 201 con el experimento actualizado
 * @throws {HttpError} 404 si el experimento no existe
 */
const create = async (req, res) => {
  const experiment = await getExperimentById(req.params.id);
  if (!experiment) {
    throw new HttpError(404, "Ese experimento no existe");
  }

  const { name, formula, cas, ce, molecularWeight, quantity } = req.body;
  experiment.chemicalProducts.push({
    name,
    formula,
    cas,
    ce,
    molecularWeight,
    quantity
  });

  const updatedExperiment = await saveExperiment(bug);
  res.status(201).json({ data: updatedExperiment });
};

/**
 * Borra un producto químico.
 * DELETE /api/experiments/:id/chemicalProducts/:chemicalProductId
 *
 * @param {Object} req - 
 * @param {Object} res - 
 * @throws {HttpError} 404 si no existe el experimento o el producto químico
 * @throws {HttpError} 
 */
const remove = async (req, res) => {
  const experiment = await getExperimentById(req.params.id);
  if (!experiment) {
    throw new HttpError(404, "Ese experimento no existe");
  }

  // .id() es el método de Mongoose para buscar un subdocumento por su _id
  const chemicalProduct = experiment.chemicalProducts.id(req.params.chemicalProductId);
  if (!chemicalProduct) {
    throw new HttpError(404, "Ese producto químico no existe");
  }
  if (!isAdmin(req.user)) {
    throw new HttpError(403, "Solo un admin pueden borrar este producto químico");
  }
  chemicalProduct.deleteOne(); // la quita del array; se guarda 
  const updatedExperiment = await saveExperiment(experiment);
  res.json({ data: updatedExperiment });
};

export default { create, remove };