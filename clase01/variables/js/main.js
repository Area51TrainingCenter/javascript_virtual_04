//"use strict";
console.log("Escrito desde mi archivo Main.js");

console.log("Texto enviado por el comando console");
console.log('Texto enviado por el comando console');
console.log(' y la persona dijo:"mañana vendre" ');
console.log("Te'x'to 1" + 'T"e"xto2');



// variable
var dato;
var dato1;
var dato2;
var dato3;
var dato4;

var nombreUsuario;
var telefonoUsuario;
var correoUsuario;


// camelCase => nombreUsuario
// PascalCase => NombreUsuario
// SnakeCase => nombre_usuario
// lowerCase => nombreusuario


nombreUsuario="Juan Carlos Ramos";
correoUsuario="jramos@gmail.com";

console.log(nombreUsuario);
console.log(correoUsuario);

// edad
// telefono
// año de nacimiento

edad=22;
telefono="999888999";
anoNacimiento="10/20/2020"
console.log(edad)
console.log(telefono)
console.log(anoNacimiento)

var estado;
estado=true;
estado=false;

var fecha="20/03/2021";

var fechaNueva=new Date();
var dia=fechaNueva.getDate(); // 20
console.log(dia)

fechaNueva.getMonth(); // Mes
fechaNueva.getDate() // dia
fechaNueva.getFullYear() // Año completo

var segundos=fechaNueva.getSeconds();// Segundos
var minutos=fechaNueva.getMinutes(); // Minutos
var horas=fechaNueva.getHours(); // Horas

console.log(fechaNueva);
console.log(segundos)
console.log(minutos)
console.log(horas)
console.log("texto"+"texto2")

var hora=fechaNueva.getHours()+"h:"+fechaNueva.getMinutes()+"m:"+segundos+"s"
//console.log("11h:07m:20s")
console.log(hora);



/*
var dato=new Persona();
dato.nombre
dato.apellido
dato.comer();
dato.dormir();
dato.decirNombreCompleto()


class Persona{
    this.nombre;
    this.apellido;
    comer(){

    }
    dormir(){

    }
    decirNombreCompleto(){

    }
}*/

/*var tipo_cambio=3.7;
var tipo_cambio=5.6;
*/


let nombre_cliente;
nombre_cliente="juan Carlos";

console.log(nombre_cliente)

//let nombre_cliente="Diego";
/*const tipo_cambio="3.7";
const tipo_cambio="34";*/