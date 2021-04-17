/*let promesa=new Promise((resolve,reject)=>{

    // hago peticion asyncrona y tragio datos
    resolve(datos);
})

promesa.then(()=>{})
promesa.then(()=>{})*/


//Url de categorias de platos
let url="http://phpstack-150511-1748519.cloudwaysapps.com/apiclase/categorias";

fetch(url)
.then((data)=>{return data.json()})
.then((data)=>{
    //estoy seguro de la informacion
    console.log(data)
    for(let item of data){
        console.log(item.nombre)
    }
})
// JSON.stringify({nombre:"Juan Carlos",telefono:"987987897"})
/*let datos=new FormData();
datos.append("nombre","Juan Carlos")
datos.append("telefono","987987987")

let config={
    method:"POST",
    body:datos
}


let url_contacto="";
fetch(url_contacto,datos)
.then((data)=>data.json())
.then((data)=>{
    console.log(data);
})
*/
