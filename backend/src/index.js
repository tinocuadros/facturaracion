//funcion expression
import app from"./app.js"; // importo app.js
const main = ()=>{
app.listen(app.get("port"));
console.log(`The company web server is running on port<<<>>>> ${app.get("port")}`);


}
main();
