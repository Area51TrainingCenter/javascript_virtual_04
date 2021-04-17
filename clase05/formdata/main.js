let inp_nombre=document.getElementById("inp-nombre");
let inp_correo=document.getElementById("inp-correo");
let guardar=document.getElementById("guardar");

let formulario=document.getElementById("formulario");


guardar.addEventListener("click",function(){
    console.log(formulario);
    let datos=new FormData(formulario);
    console.log(datos.get("nombre"))
    console.log(datos.get("correo"))
    console.log(datos.get("telefono"))
    console.log(datos.get("facebook"))
    let todos=datos.entries();
    console.log(todos);

    /*datos.append("nombre",inp_nombre.value);

    datos.append("correo",inp_correo.value);

    datos.set("nombre","Diego");


    console.log(datos.get("nombre"))

    console.log(datos.has("nombre"))*/

})
