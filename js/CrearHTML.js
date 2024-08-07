/* Modularizar Exportar e importar */

/* 0- */
export function MostrarHTML() {
  let Noticias = document.getElementById("Noticias").innerHTML = CrearTarjetaNoticias();
  let Banner = document.getElementById("Banner").innerHTML = CrearBanner();
  let Tabla = document.getElementById("Tabla").innerHTML = CrearTabla();
}


/* Main -Secciones 1 Noticias*/
const CrearTarjetaNoticias = () => {
  let html = `
     <section class=" banner  col-lg-4 ">
          <div class="card h-100">
            <img src="img/1-Noticia.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Lorem ipsum dolor.</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" class="btn btn-primary">Más información <i class="fas fa-angle-double-right"></i></a>
            </div>
          </div>
    </section>
    `

  return html
}

/* Main .Secciones 2 Banner */
const CrearBanner =() => {
  let html = `
  <div class="container">
            <h2>Lorem ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut qui laudantium id quam magni accusantium,
              veritatis, ipsam labore, reprehenderit dolore repudiandae nemo sint deserunt! Suscipit facilis qui
              inventore
              consequatur fugit.</p>
    <a href="#" class="boton">Más información <i class="fas fa-chevron-right"></i></a>
  `

  return html
}

const CrearTabla = () => {
  let html = `
   <thead class="thead-inverse">
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>asas</td>
                  <td>asas</td>
                 
                </tr>
                 
              </tbody>
  `
  return html 
}