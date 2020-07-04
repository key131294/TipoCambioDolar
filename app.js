//todo --> Variables
const boton = document.getElementById('boton');
const insertar = document.getElementById('insertar');



//todo --> EventListeners
boton.addEventListener('click', imprimir);



//todo --> Functions
function imprimir(e) {
    e.preventDefault();
// crear objeto
const xhr = new XMLHttpRequest();

// CREAR LA CONEXION
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts', true)


//todo --> carga y lee datos
xhr.onload = function () { 
    if(this.status === 200){
        // console.log(JSON.parse(this.responseText));
     const respuesta = JSON.parse(this.responseText);

     let contenido = '';
     respuesta.forEach(function(post) {
         contenido += `
         <h2> ${post.id} </h2>
         <h3> ${post.title} </h3>
         <p> ${post.body} </p>
         `
     });
     insertar.innerHTML = contenido;

    }
 }


 //todo --> enviar la CONEXION
xhr.send();


}


