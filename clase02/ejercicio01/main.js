let listado_ingredientes=[];
let error=document.getElementById("error");
let ele_cantidad=document.getElementById("cantidad")

function agregarIngrediente(valor){
    error.innerText=""
  /* console.log(valor);
    console.log("agregando ingredietne")*/
    let estado=listado_ingredientes.includes(valor);
    console.log(estado);
    //estado==false -> el ingrediente no existe en la lista , lo debo agregar
    //estado==true --> el ingrediente ya existe , NO lo debo agregar


    if(estado){
        error.innerText="El ingrediente ya se encuentra registrado";
    }else{
        listado_ingredientes.push(valor)
    }
    
    actualizarCantidad();
   

}

function actualizarCantidad(){
    console.log
    let cantidad=listado_ingredientes.length;
    console.log(cantidad)
    ele_cantidad.innerText=cantidad;
}