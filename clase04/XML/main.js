//let url_categoria="http://sminnova.com/restapitrujillo/sitiosturisticos/categoria/ID"
//let url_listado="http://sminnova.com/restapitrujillo/sitiosturisticos"

/*
let url_listado="http://sminnova.com/restapitrujillo/sitiosturisticos"
nombre
foto_principal
direccion
*/


let url1="informacion.json";
let url2="informacion2.json";

/*
let url_listado="https://sminnova.com/restapitrujillo/sitiosturisticos"
nombre
foto_principal
direccion
*/
let opcion1=document.getElementById("opcion1")
let opcion2=document.getElementById("opcion2")
let cantidad_elementos;
let listado_contenido=document.getElementById("listado-contenido");

opcion1.addEventListener("click",()=>{
    let xhr=new XMLHttpRequest()
    xhr.open("GET",url1)
    xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                let resultado=JSON.parse(xhr.responseText);
                cantidad_elementos=resultado.length;
                let content="";
                for(let i=0;i<cantidad_elementos;i++){
                    content=content+` <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${  resultado[i].titulo}</h5>
                      <p class="card-text">${resultado[i].cotenido}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>`;


                }
                listado_contenido.innerHTML=content;
            }
        }
})

opcion2.addEventListener("click",()=>{

    let xhr=new XMLHttpRequest()
    xhr.open("GET",url2)
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            //console.log(xhr.responseText);
            let resultado=JSON.parse(xhr.responseText);
            console.log(resultado);
            cantidad_elementos=resultado.length;
            let content="";
           /* for(let item of resultado){
                content=content+` <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.titulo}</h5>
                  <p class="card-text">${item.contenido}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`;
            }*/
            for(let i=0;i<cantidad_elementos;i++){
                /*resultado[i].titulo
                resultado[i].contenido*/

                content=content+` <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${  resultado[i].titulo}</h5>
                  <p class="card-text">${resultado[i].cotenido}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`;


            }



            listado_contenido.innerHTML=content;

        

        }
    }
    console.log(cantidad);
})

