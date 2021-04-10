//DNI
// Estatus financieron
// Multas

let peticionDNI=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("termino la peticion DNI")    
    },1000)
    
})

let estatusFinancieron=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("termino la peticion estatusFinancieron")
    },5000)
    
})

let multas=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("termino la peticion multas")
    },2000)
    
})

let total=Promise.all([peticionDNI,estatusFinancieron,multas])
total.then((data)=>{
    console.log("se ejecutaron todas las promesas");
    console.log(data)
})
total.catch((data)=>{
    console.log("Hubo un error");
})


let race=Promise.race([peticionDNI,estatusFinancieron,multas])
race.then((data)=>{
    console.log("estoy en el then de mi race")
    console.log(data)
})
race.catch((data)=>{
    console.log(data)
})







