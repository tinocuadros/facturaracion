// Importamos Router de Express y el controlador de clientes
import { Router } from "express";
import { methodHTTP as clienteController } from "../controllers/clientes.controllers.js";

// Almacenamos todo el poder de Router en router
const router = Router();

// GET y POST 
router.get("/", clienteController.getClientes); // GET: Obtener todos los clientes
router.post("/", clienteController.postCliente); // POST: Crear un nuevo cliente


// Exportamos las rutas
export default router;
