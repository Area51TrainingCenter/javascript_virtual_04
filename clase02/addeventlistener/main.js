let btn_tarea1=document.getElementById("tarea1");
let btn_tarea2=document.getElementById("tarea2");


let caja_contenido=document.getElementById("contenido-elementos");
// innerText
// innerHtml
// classList // .add()  // .remove()

btn_tarea1.addEventListener("click",fnc_tarea1)

function fnc_tarea1(){
    console.log("consultando..")
    let nombre="Juan Carlos";
    caja_contenido.innerHTML="<h2>" + nombre + "</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam ullam dicta animi </p>"
    //btn_tarea1.removeEventListener("click",fnc_tarea1)
}

//document.getElementById("tarea1").addEventListener("click",function(){})
/*
btn_tarea2.addEventListener("click",fnc_tarea2)
function fnc_tarea2(){

}*/

btn_tarea2.addEventListener("click", function() { 

    let nombre="Juan Carlos";
    let apellido="RT";
    let correo="@jcarlos";
    caja_contenido.innerHTML=`
                            <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td> ${nombre} </td>
                                <td> ${apellido}</td>
                                <td> ${correo}</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                        `
 } )



/** FORMA 1 **/
/*
 let item1=document.getElementById("item1");
 let item2=document.getElementById("item2");
 let item3=document.getElementById("item3");

 item1.addEventListener("click",function(){
    quitarActivado()
    item1.classList.add("activado")
 })
 item2.addEventListener("click",function(){
    quitarActivado()
    item2.classList.add("activado")
})

item3.addEventListener("click",function(){
   quitarActivado()
    item3.classList.add("activado")
})

function quitarActivado(){
    item1.classList.remove("activado");
    item2.classList.remove("activado");
    item3.classList.remove("activado");
}*/

/** FORMA 2 **/
let item1=document.getElementById("item1");
let item2=document.getElementById("item2");
let item3=document.getElementById("item3");

item1.addEventListener("click",activarMenu)
item2.addEventListener("click",activarMenu)
item3.addEventListener("click",activarMenu)


function activarMenu(){
    quitarActivado()
    this.classList.add("activado")
}


function quitarActivado(){
   item1.classList.remove("activado");
   item2.classList.remove("activado");
   item3.classList.remove("activado");
}


let foto1=document.getElementById("foto1")
let foto2=document.getElementById("foto2")
let foto_principal=document.getElementById("foto-principal");

foto1.addEventListener("click",actualizarFoto)
foto2.addEventListener("click",actualizarFoto)

function actualizarFoto(){
    console.log(this)
    //obtener valores de elementos
   // let path=this.getAttribute("src");
   let path=this.getAttribute("data-ruta");
    foto_principal.setAttribute("src",path)
}