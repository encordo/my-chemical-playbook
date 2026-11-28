import { env } from "./config/env.js"; // lo primero: carga y valida el .env (si falta algo, no arranca)
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/router.js";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Permite que el frontend (otro origen) llame a la API.
// credentials: true → acepta cookies; por eso el origen tiene que ser concreto, no "*"
app.use(cors({ origin: env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser()); // rellena req.cookies

app.use("/api", router);

// Siempre después de las rutas, y en este orden:
app.use(notFound); // ninguna ruta ha respondido → 404
app.use(errorHandler); // el último: recibe todos los errores

// Primero la base de datos; si falla, connectDB detiene la aplicación
await connectDB();

// Dentro del contenedor la API escucha en el 3000; APP_PORT es el puerto publicado en tu ordenador
app.listen(3000, () => {
  console.log(`app en marcha: http://localhost:${env.APP_PORT}/api · documentación: http://localhost:${env.APP_PORT}/docs`);
});