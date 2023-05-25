var a = 1;
var b = 2;
let name = 'Enrique Aquije';
var vari = true;

console.log(`Hola mundo, este mensaje fue escrito 
por el futuro programador ${name}`);
console.log("----------------------------------------");
console.log(`la suma de los numeros es ${a + b}`);
console.log("----------------------------------------");
console.log(vari);

if(vari){
     console.log("la variable es verdadera")
}

console.log("----------------------------------------");

let new1 = 5;
console.log( "5 elevado al cubo es: " + Math.pow(new1,3));

console.log("----------------------------------------");
console.log("zzz");

console.log("-----------Operadores de Asignacion-------");
var a = 4;
a **= 5;

console.log(a);

console.log("------------CONDICIONAL IF--------------");
var num = 11;

if(num % 3 ==0){
     console.log("Tiene residuo 0");
}
else if(num < 10){
     console.log("Es menor a 10");
}
else{
     console.log("El numero ingresado no es 8");
}

console.log("------------BUCLE WHILE--------------");
var contador = 0;
while(contador < 10){
     contador++;
     if(contador % 2 != 0){
          console.log(contador);
     }
     
}
console.log("------------FOR--------------");
for( var i = 0; i <= 9; i++){
     console.log(i);
}
console.log("------------FUNCIONES--------------");

function cafetera(i1, i2, ca){
     if(i1 == 'leche' && i2== 'cafe'){
          console.log(`usted está preparando un capucchino y tiene ${ca} de azucar`);
     } 
}

console.log(cafetera('leche','cafe',4));

console.log("------------VAR Y LET--------------");
