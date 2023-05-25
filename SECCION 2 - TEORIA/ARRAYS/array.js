const respuesta = document.querySelector("#res");
const btn = document.querySelector("#ejecuta");

let array = [1,2,3,4,5,6]

btn.addEventListener('click',mostrar)

function mostrar(){
    respuesta.innerText = array;
}