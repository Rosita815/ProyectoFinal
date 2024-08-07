
import { MostrarHTML } from "./Global.js"
import { ObtenerDatosConfiguracion, ObtenerDatosApiRick } from "./Servicios_Config.js"

/* Los componentes */
document.addEventListener('DOMContentLoaded', ev => {
    MostrarHTML()
    ObtenerDatosConfiguracion()
    ObtenerDatosApiRick()
})

