import { Router } from "express";
import experimentController from "../controllers/experiment.controller.js";
import chemicalProductController from "../controllers/chemicalProduct.controller.js";
import instrumentController from "../controllers/instrument.controller.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.middleware.js";

const experimentRouter = Router();

export default experimentRouter;
