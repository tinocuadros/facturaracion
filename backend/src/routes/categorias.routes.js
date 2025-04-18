//importamos Router de  express y el controlador 
import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";

//Almacenar todo el poder de Router en router
const router= Router();

//get y post gestion de las respuestas desde serve
router.get("/",categoriaController.getCategorias); //para el crud- read
router.post("/",categoriaController.postCategorias);// create 

//ruta que recibe un parametro id 
router.get("/:id", categoriaController.getCategory); //para crud - read sola fila
router.delete("/:id", categoriaController.deleteCategory);//delete 
router.put("/:id", categoriaController.updateCategorias);//update
//exportamos para que sea disponible en api
export default router;