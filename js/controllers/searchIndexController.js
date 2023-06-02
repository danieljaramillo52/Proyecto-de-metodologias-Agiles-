import { services } from "../service/product-service.js";
import { construccion } from "./construccionController.js";

const search = document.getElementById("search")
const about = document.getElementById("about")
const banner = document.getElementById("banner")
const section = document.getElementById("searchVentas")
const ul = document.createElement("div")
ul.classList.add("row", "row-cols-1" ,"row-cols-md-3", "g-4" ,"ventas")


const arrayConstruccion = async(input) =>{
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
        about.style.display = "none";
        banner.style.display = "none";
        section.appendChild(ul);
        arrayConstruccion(dataSearch).then((response) => {
            ul.innerHTML = "";
            response.map(({titulo,img,descripcion,precio,categoria})=> {
                ul.appendChild(construccion(titulo,img,descripcion,precio));
            })
        })
    }else {
        section.removeChild(ul);
        banner.style.display = "block";
        about.style.display = "flex";
    }
})

search.addEventListener("blur",({target})=>{
    const dataSearch = target.value;
    if(dataSearch.length === 0){
        section.removeChild(ul);
        banner.style.display = "block";
        about.style.display = "flex";
    }
});