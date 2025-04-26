// Importamos Router de Express y el controlador de empleados
import { Router } from "express";
import { methodHTTP as empleadoController } from "../controllers/empleados.controllers.js";

// Almacenamos todo el poder de Router en router
const router = Router();

// GET y POST 
router.get("/", empleadoController.getEmpleados); // para el CRUD - 
router.post("/", empleadoController.postEmpleado); // CREATE 

// Ruta que recibe un parámetro id
router.delete("/:id", empleadoController.deleteEmpleado); // DELETE 


// Exportamos 
export default router;