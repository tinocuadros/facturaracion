//importamos Router de  express y el controlador 
import { Router } from "express";
import { methodHTTP as productoController} from "../controllers/productos.controllers.js";

//Almacenar todo el poder de Router en router
const router= Router();


//ruta que recibe un parametro id 

router.put("/:id", productoController.updateProducto);//update
//exportamos para que sea disponible en api
export default router;