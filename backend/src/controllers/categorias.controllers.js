import getConection from "../db/database.js"

/*Consulta  por table */
const getCategorias = async (req,res)=>{
    try {
        const connection = await getConection();
    const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion,Imagen FROM categorias ")
    res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
    
}

/* Insert valores  */
const postCategorias= async (req,res)=>{
    try {
         const {CategoriaNombre,Descripcion,Imagen} = req.body;

        const categiry = {CategoriaNombre,Descripcion,Imagen }

        const conenection = await getConection();

        const result = await conenection.query("INSERT INTO  categorias SET ? ", categiry)
        res.json(result)

    } catch (error) {
        console.error("Error 500"); 
    }
}

/*consulta por id */
const getCategory = async (req, res)=>{
    try {
    console.log(req.params);
    const{id} = req.params

    const connection = await getConection();
    const result = await conenection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE  CategoriaID = ?",id)
    res.json(result);

    } catch (error) {
        console.error("Error 500 algo sali mal");
    }
    
}

//delete por id

const deleteCategory = async (req, res)=>{
    try {
    console.log("id de categoria a borrar: ",req.params);
    const{id} = req.params
    const connection = await getConection();
    const result = await connection.query("DELETE FROM Categorias  WHERE  CategoriaID = ?",id)
    res.json(result);

    } catch (error) {
        console.error("Error 500 algo sali mal");
    }
    
}

// modificar
const updateCategorias= async (req,res)=>{
    try {
        const{id} = req.params
        const {CategoriaNombre,Descripcion,Imagen} = req.body;
        const categiry = {CategoriaNombre,Descripcion,Imagen }
        const conenection = await getConection();
        const result = await conenection.query("UPDATE   categorias SET ? WHERE CategoriaID = ?", [categiry,id])
        res.json(result)

    } catch (error) {
        console.error("Error 500"); 
    }
}




export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategory,
    deleteCategory,
    updateCategorias

}