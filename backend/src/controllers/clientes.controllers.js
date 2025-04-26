import getConection from "../db/database.js"

/*Consulta  por table */
const getClientes = async (req,res)=>{
    try {
        const connection = await getConection();
    const result = await connection.query("SELECT ClienteID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax FROM clientes ")
    res.json(result);
    } catch (error) {
        console.error("Error 500");
    }
    
}



// Insertar 
const postCliente = async (req, res) => {
    try {
        const { 
            Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax 
        } = req.body;
        const cliente = { 
            Compania, 
            Contacto, 
            Titulo, 
            Direccion, 
            Ciudad, 
            Regiones, 
            CodigoPostal, 
            Pais, 
            Telefono, 
            Fax 
        };

        const connection = await getConection();
        const result = await connection.query("INSERT INTO clientes SET ?", cliente);
        res.status(201).json(result); 
    } catch (error) {
        console.error("Error 500, algo salió mal:", error);
        res.status(500).json({ message: "Hubo un problema al insertar el cliente", error: error.message });
    }
};

export { postCliente };

export const methodHTTP = {
    getClientes,
    postCliente
    

}