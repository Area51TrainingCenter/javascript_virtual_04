$(function(){
    cargarPedidos();


    setInterval(function(){
        cargarPedidos();
    },5000)
})
function cargarPedidos(){
 
    let random=Math.random()*100;
    let url="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/orden/listado?v"+random;
    fetch(url)
    .then((data)=>{return data.json()})
    .then((data)=>{
        $("#detalle-pedido").html("")
        console.log(data);
       for(let item of data){
        $("#detalle-pedido").append(`<tr>
        <td>${item.id}</td>
        <td>${item.fecha}</td>
        <td>${item.hora}</td>
        <td>${item.nombre_cliente}</td>
        <td>${item.telefono} <span class="action"><a target="_blank" href="https://api.whatsapp.com/send?phone=51${item.telefono}&text=Hola%20te%20saludmaos%20de">Escribir</a></span>     </td>
        <td>${item.total_pagar}</td>
        <td><button class="btn btn-success" onclick="ver_pedido(${item.id})">Ver pedido</button></td>
    </tr>`)
       }
    })
}
function ver_pedido(id_pedido){
    console.log(id_pedido)
      let url_detalle_pedido="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/orden/detalle-orden";
    let config={
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({id:id_pedido})
    }

    fetch(url_detalle_pedido,config)
    .then((data)=>{return data.json()})
    .then((data)=>{
        console.log(data.data.platos)
        let platos=data.data.platos;
        $("#detalle-platos").html("")
        for(let item of platos){
            $("#detalle-platos").append(`<tr>
            <td>${item.id_plato}</td>
            <td>${item.nombre_plato}</td>
            <td>${item.precio}</td>
            <td>${item.cantidad}</td>
            <td>${item.total}</td>
        </tr>`)
        }
        
    })



   $("#modal-detalle").fadeIn();
}

$("#cerrar-modal").click(function(){
    $("#detalle-platos").html("")
    $("#modal-detalle").fadeOut();
})

