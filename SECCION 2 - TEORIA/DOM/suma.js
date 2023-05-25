const txt1 = document.querySelector("#n1");
const txt2 = document.querySelector("#n2");

const respuesta= document.querySelector("#rpta");

const btnCalcular = document.querySelector("#calcular");

btnCalcular.addEventListener('click', suma);
function suma(){
  
    respuesta.innerText = parseFloat(txt1.value) + parseFloat(txt2.value); 
    respuesta.style = "color:red";
}