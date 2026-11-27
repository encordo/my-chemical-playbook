import { Types } from "mongoose";
import {
    getExperiments,
    getExperimentById,
    createExperiment,
    saveExperiment,
    deleteExperiment
} from "../repositories/experiment.repository.js";
import { isAdmin } from "../utils/permissions.js";
import { HttpError } from "../utils/HttpError.js";

// Los campos que el usuario puede escribir.
const EDITABLE_FIELDS = ["title", "description","instructions"];

/**
 * Lista los experimentos. GET /api/experiments
 *
 * @param {Object} req - query
 * @param {Object} res - 200 con la lista de experimentos, 
 */
const getAll = async (req, res) => {
    const experiments = await getExperiments();
    res.json({ data: experiments });
};

/**
 * Devuelve un experimento con sus productos químico e instrumentos. GET /api/experiments/:id
 *
 * @param {Object} req - params.id: el _id del experimento
 * @param {Object} res - 200 con el experimento
 * @throws {HttpError} 404 si el experimento no existe
 */
const getById = async (req, res) => {
    const experiment = await getExperimentById(req.params.id);
    if (!experiment) {
        throw new HttpError(404, "Ese experimento no existe");
    }
    res.json({ data: experiment });
};

/**
 * Registra un experimento nuevo. POST /api/experiments
 *
 * Solo usa los campos permitidos del body.
 *
 * @param {Object} req - body: title, description, instructions y otros
 * @param {Object} res - 201 con el experimento creado
 */
const create = async (req, res) => {

    const { title, description, instructions } = req.body;

    const experiment = await createExperiment({
        title,
        description,
        instructions,
        chemicalProducts: [],
        instruments: []
    });

    res.status(201).json({ data: experiment });
};

/**
 * Edita un experimento: solo los usuarios. PATCH /api/experiments/:id
 *
 *
 * @param {Object} req - params.id y, en el body, los campos a cambiar
 * @param {Object} res - 200 con el experimento actualizado
 * @throws {HttpError} 404 si el experimento no existe
 * @throws {HttpError} 403 si el usuario no es el autor ni admin
 */
const update = async (req, res) => {
    const experiment = await getExperimentById(req.params.id);
    if (!experiment) {
        throw new HttpError(404, "Ese experimento no existe");
    }

    // Solo cambiamos los campos permitidos que hayan llegado en el body
    for (const field of EDITABLE_FIELDS) {
        if (req.body[field] !== undefined) {
            experiment.set(field, req.body[field]);
        }
    }

    const updatedExperiment = await saveExperiment(experiment); // save() ejecuta las validaciones del esquema
    res.json({ data: updatedExperiment });
};

/**
 * Borra un bug y sus soluciones: solo el autor o un admin. DELETE /api/experiments/:id
 *
 * @param {Object} req - params.id: el _id del experimento
 * @param {Object} res - 200 con un mensaje de confirmación
 * @throws {HttpError} 404 si el experimento no existe
 */
const remove = async (req, res) => {
    const experiment = await getExperimentById(req.params.id);
    if (!experiment) {
        throw new HttpError(404, "Ese experimento no existe");
    }
    if (!isAdmin(req.user)) {
        throw new HttpError(403, "Solo un admin pueden elminar este experimento");
    }

    await deleteExperiment(experiment);
    res.json({ message: "Experimento eliminado." });
};

export default { getAll, getById, create, update, remove };