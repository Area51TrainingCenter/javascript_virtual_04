sumar()
sumar()
sumar()
sumar()
sumar()


function sumar(){
    let numero1=20;
    let numero2=30;
    let suma;
    suma=numero1+numero2;
    //console.log(suma);

}
function suma_parametros(valor1,valor2,valor3){
    let suma;
    suma=valor1+valor2+valor3;
    console.log(suma);
}


function recibir_fecha(valor1){
    let hora=valor1.getHours();
    console.log(hora+"h")
    
}
let fecha=new Date();
//recibir_fecha(fecha)



//suma_parametros(10,5,75)
//suma_parametros(20,10,5)


function calcularIGV(parametro1){

    let igv=0.18;
    let calculo_igv=parametro1*igv;
    return calculo_igv;
}
function calcularTotal(cantidad,precio){
    let total=cantidad*precio;
  
    return total;
}
// Venta de producto
// calcular total
// calcular IGV
// suma total+igv

let total=calcularTotal(1,3.5);
let igv=calcularIGV(total);

let suma_total=total+igv;
console.log(suma_total);


let contenido="Contenido Global";



function demo()
{   let horario="Sabados";
 // ambito de la funcion
    console.log(contenido)
    console.log(horario);
}
function demo2(){
   let contenido="Contenido Local"
    console.log(contenido) // Contenido Global  o Contenido Local
}


demo();
demo2();