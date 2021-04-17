let categorias="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/categorias"

let platos_por_categoria="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/listado-platos/IDCATEGORIA"
let pedido=[];
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
                                <span onclick="quitar(this)">-</span>
                                <input class="qty" type="text" value="0">
                                <span onclick="agregar(this)">+</span>
                            </div>
                            <button class="btn" onclick="agregar_a_pedido(this,${item.id})">Añadir</button>
                            
                        </div>
                    </div>`)
}
}

function ver_categoria(id){

    cargarPlatosPorCategoria(id)
}

function agregar(ele){
 
    let valor_actual=$(ele).parent().find(".qty").val();
   
    let nuevo_valor=parseInt(valor_actual)+1

    if(nuevo_valor>0){
        $(ele).parent().parent().find(".btn").addClass("activo")
    }


  
    $(ele).parent().find(".qty").val(nuevo_valor);
 

}
function quitar(ele){
    let valor_actual=$(ele).parent().find(".qty").val();
  
        let nuevo_valor=parseInt(valor_actual)-1

        if(nuevo_valor==0){
        
            $(ele).parent().parent().find(".btn").removeClass("activo")
        
        }
        if(nuevo_valor<0){
            
        }else{
            $(ele).parent().find(".qty").val(nuevo_valor);  
        }

        
 
   
 
}
function agregar_a_pedido(ele,id){
   let cantidad_seleccionada=$(ele).parent().find(".qty").val();
   
   let item_pedido={
       id_plato:id,
       cantidad:cantidad_seleccionada,
   }

   pedido.push(item_pedido);
   console.log(pedido);
}