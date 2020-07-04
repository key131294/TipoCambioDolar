//todo --> Variables
const boton = document.getElementById('boton');
const insertar = document.getElementById('insertar');
const insertarDos = document.getElementById('insertarDos');
const alerta = document.getElementById('alerta');

const amiga = document.getElementById('amiga');



//todo --> EventListeners
eventListeners();
function eventListeners() {
    const pagina = document.addEventListener('DOMContentLoaded', paginaPrincipal)
    // boton.addEventListener('click', amigas )
}
// boton.addEventListener('click', imprimir);
//todo --> Functions
function paginaPrincipal(e) {
    e.preventDefault();
    // crear objeto
    const xhr = new XMLHttpRequest();
    // CREAR LA CONEXION
    xhr.open('GET', 'https://deperu.com/api/rest/cotizaciondolar.json', true)
    //todo --> carga y lee datos
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(JSON.parse(this.responseText));
            const respuesta = JSON.parse(this.responseText);

            // console.log(respuesta.cotizacion[0].Compra);
            insertar.innerHTML = `
            <div class="text-center card card-image cartilla "
           >

            <!-- Content -->
            <div class="text-white rgba-black-strong py-5 px-4">
              <div>
               
                <h3 class="card-title pt-2 pb-3"><strong> Precio de Compra </strong></h3>
                <img src="fotos/dolar.jpg" class="img-fluid rounded-circle tmnoficial mb-2" alt="">
                <h2 class="text-info"> <strong><br> S/. ${respuesta.cotizacion[0].Compra} soles. </strong> </h2>
                <a href="${respuesta.enlace} " class="">Página de guía</a>
              </div>
            </div>

          </div>
     `

    //  background: url('fotos/dolar.jpg');


    //       <ul>
     
    //  <h2>Precio de Compra: <br> S/. ${respuesta.cotizacion[0].Compra} soles.</h2>
    //  </ul>

        }



        if (this.status === 200) {
            // console.log(JSON.parse(this.responseText));
            const respuesta = JSON.parse(this.responseText);

            // console.log(respuesta.cotizacion[0].Compra);
            insertarDos.innerHTML = `
            <div class="text-center card card-image cartilla "
           >

            <!-- Content -->
            <div class="text-white rgba-black-strong py-5 px-4">
              <div>
                <h3 class="card-title pt-2 pb-3"><strong> Precio de Venta </strong></h3>
                <img src="fotos/dolar.jpg" class="img-fluid rounded-circle tmnoficial mb-2" alt="">
                <h2 class="text-success"> <strong><br> S/. ${respuesta.cotizacion[0].Venta} soles. </strong> </h2>
                <a href="${respuesta.enlace} " class="">Página de guía</a>
              </div>
            </div>

          </div>
     `
        }

setTimeout(function(){
alerta.innerHTML = `<div class="container alert alert-success text-center alert-dismissible fade show" role="alert">
<strong>Hola, el valor de la moneda esta actualizado, así que puedes confiar al 100% en esta página. <br> Gracias!! <br> <hr>
<small class="text-secondary" > <strong> creado por Key Dave </strong></small>
</strong>
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`
setTimeout(function(){
alerta.remove()
},8000)

},3000)
    }
    //todo --> enviar la CONEXION
    xhr.send();
}

// function amigas(e) {
//     e.preventDefault();
//     amiga.innerText = 'Hola Johaira!!'
// }

