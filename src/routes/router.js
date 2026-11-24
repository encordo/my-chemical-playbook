import { Router } from "express";
import authRouter from "./auth.routes.js";
import experimentRouter from "./experiment.routes.js";

// El índice de la API: cada grupo de rutas vive en su propio archivo
const router = Router();

router.get("/health", (req, res) => {
  res.json({ message: "OK" });
});

router.use("/auth", authRouter);
router.use("/experiment", experimentRouter);

export default router;