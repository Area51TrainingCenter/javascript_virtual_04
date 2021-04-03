/*datos=[
    {
      titulo:"categoria1",
      foto:"https://via.placeholder.com/100x100"
    },
    {
      titulo:"categoria2",
      foto:"https://via.placeholder.com/100x100"
    },
    {
      titulo:"categoria3",
      foto:"https://via.placeholder.com/100x100"
    },
    {
      titulo:"categoria4",
      foto:"https://via.placeholder.com/100x100"
    },
    {
      titulo:"categoria5",
      foto:"https://via.placeholder.com/100x100"
    },
    {
      titulo:"categoria6",
      foto:"https://via.placeholder.com/100x100"
    }
    ]
    let limite=datos.length;

let menu_categorias=document.getElementById("menu-categorias");
let estructura="";

    for (let i = 0; i < limite; i++) {
        estructura=estructura+`<div class="item-menu">
                                <img src="${datos[i].foto}" alt="">
                                <span>${datos[i].titulo}</span>
                              </div>`;
    }

menu_categorias.innerHTML=estructura;
    */
let menu_categorias=document.getElementById("menu-categorias");

obtenerCategorias();


function obtenerCategorias(){
  let url="https://sminnova.com/platos/platos.php?v12323";
  let xhr=new XMLHttpRequest();
  xhr.open("GET",url);
  xhr.send();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
      let resultado=JSON.parse(xhr.responseText);
     resultado;
     let limite=resultado.length;

     let estructura="";
     for(let i=0;i<limite;i++){
          estructura=estructura+`<div class="item-menu">
                                <img src="${resultado[i].foto}" alt="">
                                <span>${resultado[i].titulo}</span>
                              </div>`;
     }
     menu_categorias.innerHTML=estructura;

      
    }
  }
}