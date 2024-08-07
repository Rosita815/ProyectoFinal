export const ObtenerDatosConfiguracion = async () => {

    let url = "/js/Configuraciones.json" 

    try {

        const response = await fetch(url);
        if (response.status == "200") {
            const data = await response.json();

            console.table(data);
            return data;
        }
        else
        {
            console.log("Error al consultar API"+response.status);
        }

    } catch (error) {

        console.log("Error en la red"+ error);

    }

};

export const ObtenerDatosApiRick = async () => {

    let url = "https://rickandmortyapi.com/api/character" 

    try {

        const response = await fetch(url);
        if (response.status == "200") {
            const data = await response.json();

            console.warn(data.results);
            return data.results;
        }
        else
        {
            console.log("Error al consultar API"+response.status);
        }

    } catch (error) {

        console.log("Error en la red"+ error);

    }

};