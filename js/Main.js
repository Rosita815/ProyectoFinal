
import { MostrarHTML } from "./CrearHTML.js"

/* Los componentes */
document.addEventListener('DOMContentLoaded', ev => {
    MostrarHTML()
})

function MostrarDatosConfiguracion() {
    /* Truco !Fetch */
    let url = "/js/Configuraciones.json"
    fetch(url)
    
        .then(response => response.json())
    
        .then(data => console.log(data));
    
}