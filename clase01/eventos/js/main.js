
let elemento1=document.getElementById("titulo");

let caja1=document.getElementById("caja1")
let caja2=document.getElementById("caja2")

elemento1.innerText  // obtienes el valor
//elemento1.innerText="Nuevo valor" // actualizar el valor de la propiedad


/*

function tarea1(){
console.log("Hizo click en el elemernto 1")
}
function tarea2(){
    console.log("Hizo click en el elemernto 2")
}
*/


let titulo = document.getElementById("titulo");
//titulo.classList.add()
//titulo.classList.remove()

const defaultTitulo =titulo.innerHTML;


function tarea1() {
    titulo.classList.add("activado")
    titulo.innerText = "cambio, ups";
    caja1.classList.remove("hide")
    caja2.classList.add("hide");
}

function tarea2() {
    titulo.classList.remove("activado");
    titulo.innerText = defaultTitulo;
    caja1.classList.add("hide")
    caja2.classList.remove("hide")
}

