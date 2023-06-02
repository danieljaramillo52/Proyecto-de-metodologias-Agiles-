import { services } from "../service/product-service.js";

const list = document.getElementById("lista");

export const arriendo = (titulo,img,descripcion,precio) =>{
    const col = document.createElement("div");
    col.classList.add("col");
    const content = `
    <div class="card">
        <img src=${img} class="card-img-top" alt=${titulo}>
        <div class="card-body">
          <h5 class="card-title fw-bold">${titulo}</h5>
          <p class="card-text">${descripcion}</p>
          <span class="badge bg-primary">${precio}</span>
        </div>
    </div>
    `
    col.innerHTML = content;
    return col;
}

services.inmobiliariaList().then((data)=>{
    data.forEach(({titulo,img,descripcion,precio,categoria})=>{
        if(categoria=="arrendamiento"){
            list.appendChild(arriendo(titulo,img,descripcion,precio))
        }
    })
})
.catch((error)=>console.log(error))