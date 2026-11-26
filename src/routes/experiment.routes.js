import { Router } from "express";
import experimentController from "../controllers/experiment.controller.js";
import chemicalProductController from "../controllers/chemicalProduct.controller.js";
import instrumentController from "../controllers/instrument.controller.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.middleware.js";

const experimentRouter = Router();

//Experimentos
experimentRouter.get("/",experimentController.getAll);
experimentRouter.get("/:id",experimentController.getById);
experimentRouter.post("/",isAuthenticated, experimentController.create);
experimentRouter.patch("/",isAuthenticated, experimentController.update);
experimentRouter.delete("/",isAuthenticated, isAdmin, experimentController.remove);

//Productos químicos

experimentRouter.post("/:id/chemicalProduct", isAuthenticated, chemicalProductController.create);
experimentRouter.delete("/:id/chemicalProduct/:cProductId", isAuthenticated, isAdmin, chemicalProductController.remove);

//Instrumentos

experimentRouter.post("/:id/instrument", isAuthenticated, instrumentController.create);
experimentRouter.delete("/:id/instrument/:instrument", isAuthenticated, isAdmin, instrumentController.remove);

export default experimentRouter;
