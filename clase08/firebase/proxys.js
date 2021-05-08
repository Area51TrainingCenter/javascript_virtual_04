let manejador={
    get(obj,prop){

    },
    set(obj,prop,value){
        console.log();
        console.log(value)
        if(prop=="usuario"){
            if(parseInt(value)){
                //console.log("Es un numero")
                throw { codigo:10,mensaje:"Esta propiedad solo recibe valores de tipo string"}
            }
            else{
               // console.log("No es un numero")
                obj[prop]=value;
                //
            }
        }
        else{
            obj[prop]=value;
        }
    }
}