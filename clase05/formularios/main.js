let ele=document.getElementById("inp-enviar-datos");
let ele_usuario=document.getElementById("inp-usuario");
let ele_password=document.getElementById("inp-password");
let ele_error=document.getElementById("mensaje-error");
let inp_usuario=document.getElementById("inp-usuario");
let inp_busqueda=document.getElementById("inp-busqueda");
let formulario=document.getElementById("registro");

ele.addEventListener("click",function(){
    
    event.preventDefault();
    console.log("click en el boton enviar");
    formulario.submit();



})

let ele_boton=document.getElementById("btn-enviar-datos");
ele_boton.addEventListener("click",function(){
    let usuario=ele_usuario.value.trim();
    let password=ele_password.value.trim();
    // console.log(usuario.trim())
    // console.log(usuario.trim().length)
    if(usuario.length>0 && password.length>0){
        /*if(password.length>0){
          
            console.log("el valor de password tiene datos");
        }else{
            console.log("el campo password no tiene datos");
        }*/
        ele_error.innerText="";
        console.log("Existen los datos en ambos inputs");
        formulario.submit();

       
      
    }
    else{
        // no existen caracteres
        ele_error.innerText="Los campos no pueden estar vacios";
        console.log("Ambos campos deben tener valor");
    }
    
    
    //
})

inp_usuario.addEventListener("keyup",function(){
console.log(ele_usuario.value);
console.log(ele_usuario.value.length)

if(ele_usuario.value.length>0 && ele_usuario.value.length<6){
    ele_error.innerText="El usuario debe tener al menos 6 caracteres";
}
else{
    ele_error.innerText="";    
}
});


function buscar(){
    console.log("buscando")
    let busqueda=inp_busqueda.value.trim();
    console.log(busqueda);
    let estado=true;

    if(busqueda=="pc"){
        estado=true;
    }
    else{
        ele_error.innerText="El producto no es existe"
        estado=false;
    }

    return estado;
   
}