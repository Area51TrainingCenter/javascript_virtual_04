let listado=new Map();
listado.set("nombre","Juan Carlos");
listado.set("correo","Jramos");

console.log(listado.get("nombre"));
console.log(listado.get("correo"));


let data={
    nombre:"Diego",
    correo:"dramos@gmail.com"
}

if(data.edad!=undefined){
    data.edad;    
}

console.log(listado.has("nombre"))



for(let item of listado){
    console.log(item)
    //item = ["nombre","juan Calros"]
   //[index,value]=["nombre","juan Calros"]
}

for(let item of listado.values()){
    console.log(item)
    
}

for(let item of listado.keys()){
    console.log(item)
    
}
console.log(":::::::::::::::::::")
for(let [key,value] of listado){
    console.log(key)
    console.log(value);
}

listado.delete("correo")
console.log(listado);


