import { ExperimentModel } from "../models/experiment.model.js";


/**
 * Lista los experimentos.
 *
 * @returns {Promise<Object[]>} La lista de experimentos (vacía si no hay ninguno)
 */
const getExperiments = async () => {
  return ExperimentModel.find();
};

/**
 * Busca un experimento
 
 *
 * @param {string} id - El _id del experimento
 * @returns {Promise<Object|null>} El experimento, o null si no existe
 */
const getExperimentById = async (id) => {
  return ExperimentModel.findById(id);
};

/**
 * Crea un experimento.
 *
 * @param {Object} data - Los datos del experimento, con el autor ya puesto
 * @returns {Promise<Object>} El bug creado, con el nombre del autor
 */
const createExperiment = async (data) => {
  const experiment = await ExperimentModel.create(data);
  return experiment.populate();
};

/**
 * Guarda los cambios de un experimento. save() ejecuta las validaciones del esquema.
 *
 * @param {Object} experiment - El experimento (documento de Mongoose) modificado en memoria
 * @returns {Promise<Object>} El experimento guardado.
 */
const saveExperiment = async (experiment) => {
  await experiment.save();
  return experiment.populate();
};

/**
 * Borra un experiment (y con él sus productos químicos e instrumentos, que van dentro).
 *
 * @param {Object} experiment - El experimento (documento de Mongoose) a borrar
 * @returns {Promise<void>}
 */
const deleteExperiment = async (experiment) => {
  await experiment.deleteOne();
};

export { getExperiments, getExperimentById, createExperiment, saveExperiment, deleteExperiment };