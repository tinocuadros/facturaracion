//importar framework express y router
import express from "express";
import cors from "cors";
import categoriaRoutes from "./routes/categorias.routes.js"
import empleadoRoutes from "./routes/empleados.routes.js"
import clientesRoutes from "./routes/clientes.routes.js"
import productoRoutes from "./routes/productos.routes.js"



//asignamos a app toda funcionalidad a mi server web
const app = express();

// setear un puerto a mi web server
app.set("port",5000)

/* Middleware */
app.use(express.json());

app.use(cors());
//router
app.use("/api/categorias",categoriaRoutes)

app.get('/',(req,res)=>{
res.send('REST API EN RENDER DATABASE')
})

app.use("/api/empleados",empleadoRoutes)
app.use("/api/clientes",clientesRoutes)
app.use("/api/productos",productoRoutes)






//hacemos disponible a mi server app para toda la aplicacion
export default app;

