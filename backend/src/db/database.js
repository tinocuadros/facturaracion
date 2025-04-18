import mysql from "promise-mysql";

import config from "./../config.js";

//hacer objeto de conexion
const connection = mysql.createConnection({
    host : config.host,
    database : config.database,
    user : config.user,
    password : config.password

})

//retornar la conexion de la bd 
const getConnection = ()=>{
    return connection
}
export default getConnection;