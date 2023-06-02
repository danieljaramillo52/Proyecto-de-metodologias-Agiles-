import { services } from "../service/product-service.js";
import { ventas } from "./ventasController.js";

const search = document.getElementById("search")
const list = document.getElementById("lista")
const section = document.getElementById("searchVentas")
const ul = document.createElement("div")
ul.classList.add("row", "row-cols-1" ,"row-cols-md-3", "g-4" ,"ventas")


const arrayVentas = async(input) =>{
    try{
        const array = await services.inmobiliariaList();
        return array.filter(({titulo})=>{
            const inputLower = input.toLowerCase();
            const tituloLower = titulo.toLowerCase();
            return tituloLower.includes(inputLower);
        })
    }catch(error){
        console.log(error)
    }
}


search.addEventListener("input",({target})=>{
    const dataSearch = target.value;
    if(dataSearch.length){
        list.style.display = "none";
        section.appendChild(ul);
        arrayVentas(dataSearch).then((response) => {
            ul.innerHTML = "";
            response.map(({titulo,img,descripcion,precio,categoria})=> {
                if(categoria=="venta"){
                    ul.appendChild(ventas(titulo,img,descripcion,precio));
                }
            })
        })
    }else {
        section.removeChild(ul);
        list.style.display = "flex";
    }
})

search.addEventListener("blur",({target})=>{
    const dataSearch = target.value;
    if(dataSearch.length === 0){
        section.removeChild(ul);
        list.style.display = "flex";
    }
});