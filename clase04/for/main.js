let data=[{title:"uno"},{title:"dos"},{title:"tres"}]

for(let i=0;i<data.length;i++){
    console.log("El elemento en el indice "+i+" es");
    console.log(data[i])
}

for(let item of data ) // recorrer estructura iterables
{
    console.log(item)
}

for(let [index,item] of data.entries()){
    console.log("indice "+index)
    console.log(item);
}

let persona={
    nombre:"JC",
    apellidos:"Ramos",
    correo:"jramos@gmail.com"
}

 for( let prop in persona ){
     console.log(prop)
     //persona.prop  // persona."nombre"
     console.log(persona[prop]) // persona["nombre"]

 }

persona.nombre;
persona.apellidos;

persona["nombre"]
persona["apellido"]