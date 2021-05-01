$(function(){
    let url="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/orden/listado"
    fetch(url)
    .then((data)=>{return data.json()})
    .then((data)=>{
        console.log(data);
       for(let item of data){
        $("#detalle-pedido").append(`<tr>
        <td>${item.id}</td>
        <td>${item.fecha}</td>
        <td>${item.hora}</td>
        <td>${item.nombre_cliente}</td>
        <td>${item.telefono}</td>
        <td>${item.total_pagar}</td>
    </tr>`)
       }
    })
})