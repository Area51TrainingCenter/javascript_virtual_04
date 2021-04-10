let opcion1=document.getElementById("opcion1");
let url_listado="https://sminnova.com/restapitrujillo/sitiosturisticos"
let listado_contenido=document.getElementById("listado-contenido");

/*nombre
foto_principal
direccion*/
/*opcion1.addEventListener("click",()=>{
    cargarSitiosTuristicos()

})*/


cargarSitiosTuristicos()

function cargarSitiosTuristicos(){
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url_listado)
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
          if(xhr.status==200){
               let resultado=JSON.parse(xhr.responseText);
                pintarHTML(resultado);



          }else{
              console.log("Hubieron inconvenientes con la la petición")
          }
            
        }
    }
}

function cargarCategoria(valor){
  let url_categoria="http://sminnova.com/restapitrujillo/sitiosturisticos/categoria/"+valor;
  let xhr=new XMLHttpRequest();
  xhr.open("GET",url_categoria)
  xhr.send()
  xhr.onreadystatechange=function(){
      if(xhr.readyState==4){
          if(xhr.status==200){
              let resultado=JSON.parse(xhr.responseText);

              pintarHTML(resultado)


          }
      }
  }


}

function pintarHTML(sitios_turisticos){
  
    let cantidad_elementos=sitios_turisticos.length;
    let content="";
    console.log(sitios_turisticos);

    for(let i=0;i<cantidad_elementos;i++){
        content=content+` <div id="ele-sitio" onclick="ver_sitio(${sitios_turisticos[i].id})" class="card" style="width: 18rem;">
        <img src="${sitios_turisticos[i].foto_principal}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${  sitios_turisticos[i].nombre}</h5>
          <p class="card-text">${sitios_turisticos[i].direccion}</p>
          <a href="#" class="btn btn-primary">${sitios_turisticos[i].telefono}</a>
        </div>
      </div>`;


    }
    listado_contenido.innerHTML=content;

   

}

function ver_sitio(id_sitio){
    console.log(id_sitio)
    let url_sitio="https://sminnova.com/restapitrujillo/sitiosturisticos/id/"+id_sitio;
    let xhr=new XMLHttpRequest()
    xhr.open("GET",url_sitio)
    xhr.send()
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                let resultado=JSON.parse(xhr.responseText)
                console.log(resultado);
            }
        }
    }
}


