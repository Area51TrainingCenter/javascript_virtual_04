let persona={
    nombre:"Juan carlos",
    apellido:"RT",
    estado:true,
    codigo:1234
}

//  obteniendo (GET)
let user="vendedor"
persona.nombre// Juan Carlos

// actualizando (SET)
persona.nombre="Diego";



let manejador={
    get(objeto,propiedad){
        //console.log(objeto);
        //console.log(propiedad);
        let valor="";
        if(user=="admin"){
            valor=objeto[propiedad];
        }else{
            if(propiedad=="codigo"){
                valor="No tienes permisos para acceder a este valor";

            }else{
                valor=objeto[propiedad];
            }

        }

        return valor;
        
        
    },
    set(objeto,propiedad,valor){
        if(propiedad=="estado"){
            if(typeof valor=="boolean"){
               // console.log("puedo actualizar la propiedad")
               objeto[propiedad]=valor;
            }
            else{
               // objeto[propiedad]=valor;
                console.log("NO puedo actualizar la propiedad, recuerda que debes utilizar siempre un valor booleano")
            }
        }

    }
}




let personaProxy=new Proxy(persona,manejador);
//GET

console.log("PROXY GET")
console.log(personaProxy.codigo);

//SET
personaProxy.apellido="TR"

personaProxy.estado="activado";
console.log(personaProxy.estado)