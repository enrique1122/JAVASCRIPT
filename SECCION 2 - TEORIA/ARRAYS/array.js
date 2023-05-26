const respuesta = document.querySelector("#res");
const btn = document.querySelector("#ejecuta");

let array = [1,2,3,4,5,6]
let frutas = ["MANZANA"," UVA"," FRESA"]

btn.addEventListener('click',mostrar)

function mostrar(){
    frutas.forEach(function(item, index, array){
        respuesta.innerText = array;
    });    
}

const Persona ={
    "id" : 1,
    "nombre" : "Enrique",
    "apellido" : "Aquije",
    "birthday" : "11/05/1997",
    "skills" : ["Oracle","React"]
    
}

console.log(Persona["nombre"] + " " + Persona["apellido"]);
console.log(Persona);