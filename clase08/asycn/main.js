/*console.log("linea1")
let url="https://jsonplaceholder.typicode.com/users"
fetch(url)
.then((data)=>{return data.json()})
.then((data)=>{
    console.log("linea2")
    console.log(data);
})

console.log("linea3")


*/
async function consultarDatos(){
    console.log("linea1")
    let url="https://jsonplaceholder.typicode.com/users"
    
    let contenido= await fetch(url);
    console.log("linea2")
    let data=await contenido.json();
    //console.log(data);
    console.log("linea3")
    return data;

}

let res=consultarDatos();

res.then((data)=>{
    console.log("resultados desde el main");
    console.log(data);
});

//let promesa=new Promise();
