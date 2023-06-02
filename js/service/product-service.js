const inmobiliariaList = async () => await fetch("https://inmobiliaria.onrender.com/Inmobiliaria").then(response => response.json())
                                                                                                            .catch(error => console.log(error))

export const services = {
    inmobiliariaList,
}