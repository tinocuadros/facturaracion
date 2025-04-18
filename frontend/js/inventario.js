
/*fetch(url)
.then(resultado=>{
    return resultado.json();
})
.then(data=>{
    showndata(data)
})*/

import { obtainCategories } from "./../apiConnection/consumeApi.js";

document.addEventListener("DOMContentLoaded",()=>
    getCategorias());


 async function getCategorias() {
    const categoriesObtained = await obtainCategories();
    const container = document.querySelector("tbody");
  
    categoriesObtained.forEach((category) => {
      const { CategoriaID, CategoriaNombre, Descripcion, Imagen } = category
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${CategoriaID}</td>
        <td>${CategoriaNombre}</td>
        <td>${Descripcion}</td>
        <td><img src="${Imagen}" width="100px" class="cuenta"></td>
        <td><button class="btn color3">Details</button></td>
        <td><button class="btn color2">Edit</button></td>
        <td><button class="btn color5">Delete</button></td>
      `;
  
      container.appendChild(row);
    });
  }