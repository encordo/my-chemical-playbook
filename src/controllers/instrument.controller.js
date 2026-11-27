//import { Types } from "mongoose";
import { getExperimentById, saveExperiment } from "../repositories/experiment.repository.js";
import { isAdmin } from "../utils/permissions.js";
import { HttpError } from "../utils/HttpError.js";

/**
 * Añade una instrumento a un experimento. POST /api/experiments/:id/instruments
 *
 *
 * @param {Object} req - params.id y, en el body
 * @param {Object} res - 201 con el experimento actualizado
 * @throws {HttpError} 404 si el expeirmento no existe
 */
const create = async (req, res) => {
  const experiment = await getExperimentById(req.params.id);
  if (!experiment) {
    throw new HttpError(404, "Ese experimento no existe");
  }

  const { name, quantity } = req.body;
  experiment.instruments.push({
    name,
    quantity
  });

  const updatedExperiment = await saveExperiment(experiment);
  res.status(201).json({ data: updatedExperiment });
};

/**
 * Borra un instrumento: solo su autor o un admin.
 * DELETE /api/experiments/:id/instruments/:instrumentId
 *
 * @param {Object} req - 
 * @param {Object} res - 200 con el experimento actualizado
 * @throws {HttpError} 404 si no existe el experimento o el instrumento
 */
const remove = async (req, res) => {
  const experiment = await getExperimentById(req.params.id);
  if (!experiment) {
    throw new HttpError(404, "Ese experimento no existe");
  }

  // .id() es el método de Mongoose para buscar un subdocumento por su _id
  const instrument = experiment.instruments.id(req.params.instrumentId);
  if (!instrument) {
    throw new HttpError(404, "Ese instrumento no existe");
  }
  if (!isAdmin(req.user)) {
    throw new HttpError(403, "Solo un admin pueden eliminar este instrumento");
  }
  instrument.deleteOne(); // la quita del array; se guarda con saveExperiment
  const updatedExperiment = await saveExperiment(experiment);
  res.json({ data: updatedExperiment });
};

export default { create, remove };