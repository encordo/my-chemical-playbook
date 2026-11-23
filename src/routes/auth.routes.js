import { Router } from "express";
import authController from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

// Documentación de estas rutas (Swagger): src/docs/auth.yaml
const authRouter = Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);
authRouter.get("/me", isAuthenticated, authController.me);

export default authRouter;