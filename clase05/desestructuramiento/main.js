let datos=["Juan","correo","987987897"];
/*let nombre=datos[0];
let correo=datos[1];
let telefono=datos[2];*/

let [nombre,,telefono]=datos;

console.log(nombre)
// console.log(correo)
console.log(telefono)

let usuario={
    nombres:"Juan Carlos",
    apellidos:"Ramos Torriccelli",
    correo:"jtorriccelli1986@gmail.com",
    estado:1
}


let {nombres,correo}=usuario
console.log(nombres)
console.log(correo)



let plato={
    nombre:"plato1",
    precio:10.50,
    detalle:"detalle",
    disponible:true
}

// consultarPrecio(plato.disponible,plato.precio);


/*function consultarPrecio(disponible,precio){
    if(disponible){
        return precio;
    }
    else{
        return false;
    }
}*/

consultarPrecio(plato);

function consultarPrecio({disponible,precio,nombre}){
    if(disponible){
        return precio;
    }
    else{
        return false;
    }
}












IGV(100);
function IGV(monto){

}


monto=100;






