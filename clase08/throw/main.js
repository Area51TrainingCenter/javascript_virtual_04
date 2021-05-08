
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
        if(pro=="correo"){
            if(typeof value=="string"){
                obj[pro]=value
            }else{
                //throw("el valor debe ser un string");
                //throw new TypeError()
                //throw "valor no valido";
                throw {
                    codigo:10,
                    mensaje:"Valor no valido"
                }
                //console.log("no se puede actauliar el valor , por que el valor debe ser un string")
            }
        }
        if(pro=="nombre"){
        
            if(value.length<4){
              
                throw {
                    codigo:20,
                    mensaje:"EL nombre como minimo debe tener 4 caracteres"
                }
            }
        }

      /*  if(rol=="admin"){
            
        }
        else{
            //console.log("No se puede acceder")
            throw("No tienes el permiso para actualizar el valor");
        }*/
    }
}


let objProx=new Proxy(obj,config);
//console.log(objProx.nombre)
objProx.correo=123
objProx.nombre="123";
try{
    objProx.correo=123
    objProx.nombre="123";
}
catch(e){
  
    switch(e.codigo){
        case 10:
            alert("El valor ingresado no es correcto")
            break;
        case 20:
            alert("El nombre debe tener 3 digitos como minimo")
            break;
    }
    

}



console.log(objProx.correo)

persona=
{
    nombre:"",
    correo:""
}

persona.nombre="Martin";