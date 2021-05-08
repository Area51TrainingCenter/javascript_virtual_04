let categorias="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/categorias"

let platos_por_categoria="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/listado-platos/IDCATEGORIA"

let registrar_orden="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase//orden/registar"

let detalle_pedido=[];
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
    console.log(data);
$("#listado-platos").html("");
    for(let item of data){
       let existe_item=validarExistenciaEnPedido(item);
       console.log(existe_item);
       let cantidad=0;
       let estado_botton="";

       if(existe_item){
           estado_botton="activo";
           cantidad=existe_item.cantidad;
   
       }else{
           estado_botton="";
           cantidad=0;
        
       }
    
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
                                    <input class="qty" type="text" value="${cantidad}">
                                    <span onclick="agregar(this)">+</span>
                                </div>
                                <button class="btn ${estado_botton}" onclick="agregar_a_pedido(this,${item.id},${item.precio},'${item.nombre}')">Añadir</button>
                                
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



function agregar_a_pedido(ele,id,precio,nombre)
{   
   let cantidad_seleccionada=$(ele).parent().find(".qty").val();
   let item_pedido=new ItemPedido();
   item_pedido.id_plato=id;
   item_pedido.nombre_plato=nombre;
   item_pedido.precio=precio;
   item_pedido.cantidad=parseInt(cantidad_seleccionada);
   item_pedido.total=item_pedido.calcularTotal();

   let estado=false; 
   for(let item of detalle_pedido){
       if(item.id_plato==id){
            item.cantidad=parseInt(cantidad_seleccionada);
           // item.cantidad=item.cantidad+parseInt(cantidad_seleccionada);
            item.total=item.calcularTotal();
            estado=true;
            break;
        }
    }

    if(estado){

    }
    else{
        detalle_pedido.push(item_pedido);
    }

   console.log(detalle_pedido);
   detallePedidoHTML(detalle_pedido);
    // actualizar listdo pedido HTML
}

function detallePedidoHTML(listado){
    $("#detalle-pedido").html("");
    for(let item of listado){
        $("#detalle-pedido").append(`<tr>
                                        <td>${item.id_plato}</td>
                                        <td>${item.nombre_plato}</td>
                                        <td>${item.cantidad}</td>
                                        <td>${item.precio}</td>
                                        <td>${item.total}</td>
                                        <td><button type='button' onclick="quitar_de_pedido(this,${item.id_plato})" class="btn btn-danger">Quitar</button></td>

                                    </tr>`)
    }
              
}
function quitar_de_pedido(ele,id_plato_eliminar){
    //console.log(id_plato_eliminar);
    //console.log(detalle_pedido);
    let temporal=[];

    for(let item of detalle_pedido){
        if(item.id_plato==id_plato_eliminar){
        //    console.log("este ese el plato que debo eleminar")
        }
        else{
            temporal.push(item)
          //  console.log("ESTE PLATO DEBE PERMENCER")
        }
       /* console.log(item.id_plato)
        console.log(item.nombre_plato);*/
        
    }
  
    detalle_pedido=temporal;
   //detalle_pedido
   detallePedidoHTML(detalle_pedido)
}

function validarExistenciaEnPedido(item_servicio){
    let producto_encontrado=false;

    for(let obj of detalle_pedido){
        if(obj.id_plato==item_servicio.id){
            // si entra a este if es por que el producto que 
            // se esta listando existe en mi detalle de pedido
            producto_encontrado=obj;
            break;
        }
    }
    return producto_encontrado;

}

function generarPedido(){
   /* console.log("Generar pedido")
    let pedido=new Pedido();
   // pedido.setHoraFecha();
    console.log(pedido);
    
*/

  
    if(detalle_pedido.length>0){

        /*let use={
            type:"uno"
        }
        
        'use={"type":"uno"}'*/

        let pedido=new Pedido();
        pedido.nombre_cliente=$("#inp-nombre-completo").val();
        pedido.direccion=$("#inp-direccion").val();
        pedido.referencia=$("#inp-referencia").val()
        pedido.telefono=$("#inp-telefono").val()
        pedido.platos=detalle_pedido;
        total_pagar_platos=0;
        for(let item of detalle_pedido){
            total_pagar_platos=total_pagar_platos+item.total;
        }
        pedido.total_pagar=total_pagar_platos;
        console.log(pedido);
        let url_registrar_pedido="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/orden/registar"
        let config={
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(pedido)
        }

      fetch(url_registrar_pedido,config)
        .then((data)=>{return data.json()})
        .then((data)=>{
            console.log(data);
            if(data.estado==1){
                alert("Tu pedido fue recibido con exito , en unos minutos nos pondremos en contacto contigo via whatsapp");            
            }
            else{
                alert("Tuvimos problemas para registrar tu pedido por favor intentalo neuvamente en unos minutos")
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        
    }
    else{
        alert("No hay productos para generar un pedido , agrega productos a tu pedido")
    }
}

function registarOrden(){
  /* let objeto_orden={
        nombre_cliente:"",
        fecha:"",
        hora:"",
        telefono:"",
        direccion:"",
        referencia:"",
        platos:[
        {  id_plato:"",
            precio:"",
            cantidad:"",
            nombre_plato:"",
            total:""
        }
        ],total_pagar:""
    }**/

}