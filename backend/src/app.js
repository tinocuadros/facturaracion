//importar framework express y router
import express from "express";
import cors from "cors";
import categoriaRoutes from "./routes/categorias.routes.js"


//asignamos a app toda funcionalidad a mi server web
const app = express();

// setear un puerto a mi web server
app.set("port",5000)

/* Middleware */
app.use(express.json());

app.use(cors());
//router
app.use("/api/categorias",categoriaRoutes)

//hacemos disponible a mi server app para toda la aplicacion
export default app;

