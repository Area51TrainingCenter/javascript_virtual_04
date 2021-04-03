datos=[
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
    