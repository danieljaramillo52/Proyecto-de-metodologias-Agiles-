import { services } from "../service/product-service.js";

const list = document.getElementById("lista");

export const construccion = (titulo,img,descripcion) =>{
    const col = document.createElement("div");
    col.classList.add("col");
    const content = `
    <div class="card">
        <img src=${img} class="card-img-top" alt=${titulo}>
        <div class="card-body">
          <h5 class="card-title fw-bold">${titulo}</h5>
          <p class="card-text">${descripcion}</p>
        </div>
    </div>
    `
    col.innerHTML = content;
    return col;
}

services.inmobiliariaList().then((data)=>{
    data.forEach(({titulo,img,descripcion,categoria})=>{
        if(categoria=="construccion"){
            list.appendChild(construccion(titulo,img,descripcion))
        }
    })
})
.catch((error)=>console.log(error))