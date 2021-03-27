let dato;
/*var dato;
const dato;
*/
let valor=20;
let valor_texto="String"
let valor_bool=true;

let valor_fecha=new Date();

//Arreglo
let nombre1="Jc"
let nombre2="Andrea"
let nombre3="Carlos"

let nombres=["Jc","Andrea","Carlos"]


let nombres_2=["luis","carlos","alejandro"] ;

let nombre_3=[nombre1,nombre2,nombre3] //
//let nombre_3=["Jc","Andrea","Carlos"]

let datos=[true,20,"JuanC",true,valor_fecha,["Jc","Andrea","Carlos"]]


console.log(nombres);
console.log("cantidad de elementos:"+nombres.length);
console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])
console.log(nombres[3])


let nombres_4=["carlos","alejandro","luis","carlos","alejandro","luis","carlos","alejandro","luis","carlos","alejandro","luis","carlos","alejandro","luis","carlos","alejandro","luis","carlos","alejandro","luis","carlos","alejandro","luis","carlos","alejandro","luis","carlos","alejandro","maria"] ;
console.log(nombres_4.length)
let ind=nombres_4.length-1;
console.log(nombres_4[ind])

let arreglo=[];
// agregar elementos a un arreglo (siempre se agrega al final)
arreglo.push("Hamburgesa")
arreglo.push("Lechuga")

console.log(arreglo);


// quitar elementos a un arreglo (siempre se quita el ultimo)
console.log("Quitamos un elemento")
arreglo.pop();
console.log(arreglo);


// agregar elementos a un arreglo (al inicio)
arreglo.unshift("Pan")
console.log(arreglo);

// quitar elementos a un arreglo (que se encuentre al inicio)
arreglo.shift()

console.log(arreglo);

let busqueda=arreglo.includes("Hamburgesa");
console.log(busqueda)