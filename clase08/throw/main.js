
let obj={
    nombre:"JC",
    correo:"jc@gmail.com"
}

let rol="user";
let config={
    get(obj,pro){
        //console.log(obj);
        //console.log(pro)
        console.log(":::::::::")
        return obj[pro];
    },
    set(obj,pro,value){
        if(rol=="admin"){
            obj[pro]=value
        }
        else{
            //console.log("No se puede acceder")
            throw("No tienes el permiso para actualizar el valor");
        }
    }
}


let objProx=new Proxy(obj,config);
//console.log(objProx.nombre)

objProx.correo="Diego@gmail.com"


console.log(objProx.correo)