let categorias="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/categorias"

let platos_por_categoria="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/listado-platos/IDCATEGORIA"

cargarCategorias()

function cargarCategorias(){
    let url=categorias
    fetch(url)
    .then((data)=>{return data.json()})
    .then((data)=>{
        //console.log(data);
        categoriaHTML(data)
    })
}
function cargarPlatosPorCategoria(id){
    let url="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/listado-platos/"+id;
    fetch(url)
    .then((data)=>{return data.json()})
    .then((data)=>{
        
        listadoPlatoHTML(data)
    })
}


function categoriaHTML(data){
    $("#listado-categorias").html("");
   for(let item of data){
    $("#listado-categorias").append(`<div class="item-categoria" onclick="ver_categoria(${item.id})">
                                        <img src="${item.foto}" alt="">
                                        <div class="titulo">
                                        <span>${item.nombre}</span>
                                        </div>
                                    </div>`)
   } 

}

function listadoPlatoHTML(data){
$("#listado-platos").html("");
for(let item of data){
    console.log(item);
    $("#listado-platos").append(`<div class="item-plato">
                        <div class="marco-foto">
                            <img class="foto-plato" src="${item.foto}" alt="">
                        </div>
                        
                        <div class="info-precio">
                            <p class="nombre">${item.nombre}</p>
                            <p class="precio">S/${item.precio}</p>
                        </div>
                        <div class="detalle">
                            ${item.detalle}
                        </div>
                        <div class="control-agregar">
                            <div class="control">
                                <span>-</span>
                                <input type="text" value="0">
                                <span>+</span>
                            </div>
                            <button class="btn">Añadir</button>
                            
                        </div>
                    </div>`)
}
}

function ver_categoria(id){

    cargarPlatosPorCategoria(id)
}