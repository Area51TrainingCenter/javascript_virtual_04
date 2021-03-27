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
