import getConection from "../db/database.js"

/*Consulta  por table */
const getEmpleados = async (req,res)=>{
    try {
        const connection = await getConection();
    const result = await connection.query("SELECT EmpleadoID, Apellido ,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Extension,Foto,Notas,Jefe,RutaFoto FROM empleados ")
    res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
    
}

// Insertar 
const postEmpleado = async (req, res) => {
    try {
        
        const { 
            Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, 
            Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto 
        } = req.body;

        
        const empleado = { 
            Apellido, 
            Nombre, 
            Titulo, 
            TituloCortesia, 
            FechaNacimiento, 
            FechaContratacion, 
            Direccion, 
            Ciudad, 
            Regiones, 
            CodigoPostal, 
            Pais, 
            Telefono, 
            Extension, 
            Foto, 
            Notas, 
            Jefe, 
            RutaFoto 
        };
        const connection = await getConection();
        const result = await connection.query("INSERT INTO empleados SET ? ", empleado);
        res.json(result);
    } catch (error) {
    
        console.error("Error 500, algo salió mal:", error);
    }
};

export { postEmpleado };

//delete 
const deleteEmpleado = async (req, res) => {
    
    try {
   
        console.log("ID del empleado a borrar:", req.params);
        const { id } = req.params;
        const connection = await getConection();
        const result = await connection.query("DELETE FROM empleados WHERE EmpleadoID = ?", [id]);
        res.json(result);
    } catch (error) {
        console.error("Error 500, algo salió mal:", error);
    }
};

export { deleteEmpleado };

export const methodHTTP = {
    getEmpleados,
    postEmpleado,
    deleteEmpleado

}