import getConection from "../db/database.js"

const updateProducto = async (req, res) => {
    try {
        const {id} = req.params
        const {ProductoNombre, PrecioUnitario} = req.body
        const producto = { ProductoNombre,PrecioUnitario }
        const connection = await getConection();
        
        const result = await connection.query("UPDATE productos SET ? WHERE ProductoID = ?", [producto,id])
        res.json(result)
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
    }
}


export const methodHTTP = {
    updateProducto
}