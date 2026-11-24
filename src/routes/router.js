import { Router } from "express";
import authRouter from "./auth.routes.js";
import bugRouter from "./bug.routes.js";

// El índice de la API: cada grupo de rutas vive en su propio archivo
const router = Router();

router.get("/health", (req, res) => {
  res.json({ message: "OK" });
});

router.use("/auth", authRouter);
//router.use("/bugs", bugRouter);

export default router;