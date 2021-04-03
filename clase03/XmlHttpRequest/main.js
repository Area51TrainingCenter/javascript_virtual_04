let nombres=document.getElementById("nombres");
let url="https://jsonplaceholder.typicode.com/users";

let xhr=new XMLHttpRequest();
// GET pedir informacion
// POST enviar informacion
// PUT enviar informacion para actaulziar
// DELETE envias informacion (ID) eliminar

xhr.open("GET",url)
// configuro la peticion
xhr.send()
console.log(xhr.readyState);

xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    console.log("se hizo un cambio en ready state")
    if(xhr.readyState==4){
        //console.log("La peticion termino y ya tengo los datos");
       // console.log(xhr.responseText)
        let resultado=JSON.parse(xhr.responseText)
        console.log(resultado);
        let indice=resultado.length;
        let estructura="";
        for(let i=0;i<indice;i++){
            estructura=estructura+"<li>"+resultado[i].name+"</li>";
            //console.log(resultado[i].name);
        }
        nombres.innerHTML=estructura;
     
    }
}
/*
0 No inicializado (objeto creado, pero no se ha invocado el método open)
1 Cargando (objeto creado, pero no se ha invocado el método send)
2 Cargado (se ha invocado el método send, pero el servidor aún no ha respondido)
3 Interactivo (se han recibido algunos datos, aunque no se puede emplear la propiedad responseText)
4 Completo (se han recibido todos los datos de la respuesta del servidor)
*/
