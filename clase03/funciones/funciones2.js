
console.log(num1)

let suma=num1+num2;
console.log(suma)

console.log("fin de mi JS")

var num1;
var num2;


/**** HOISTING */
//var num1;
//var num2;
/*
function tarea(){
    console.log("ejecutando tarea")
}
var nuevafuncion;

*/
/*
console.log(num1)

let suma=num1+num2;
console.log(suma)

console.log("fin de mi JS")

var num1;
var num2;*/

tarea();

//nuevafuncion();

function tarea(){
    console.log("ejecutando tarea")
}

var nuevafuncion=function(){
    console.log("ejecutando nueva funcion")
}

var ultimafuncion=()=>{
    console.log("ejecutando nueva funcion")
}
ultimafuncion()

function datosUsuario(nombre,apellido,correo,dni){
    console.log(":::::::::::::::::::")
    console.log(nombre)
    console.log(apellido)
    console.log(correo)
    console.log(dni)
}


datosUsuario("Juan","ramos","jramos@gmail.com","DNI");

function sumatoria(num1,num2){
    console.log("////////////////////")
    console.log(num1+num2)
}
sumatoria(15,23)

function sumatoria2(...datos){
    console.log("////////////////////")
    console.log(datos);
}

sumatoria2(10,10);