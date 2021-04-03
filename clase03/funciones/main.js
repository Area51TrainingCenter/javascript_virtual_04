function tarea(){
    console.log("ejecutando la funcion tarea")
}
tarea();

let tarea2=function(){
    console.log("ejecutando la funcion tarea 2")
}

tarea2();

let tarea3  =()=> console.log("click en la tarea 3") ;

tarea3();

let tarea4= (monto)=>{
    let dato=3.15*monto;
    return dato;
}

//let tarea5=(monto)=>{ return monto*3.5 }
//let tarea5=(monto)=> monto*3.5;

let tarea5 = monto => monto*3.5;
let tarea6 = texto=> texto.toUpperCase();

function tarea7(text){
    return texto.toUpperCase();
}

console.log(tarea5(3))
console.log(tarea6("hola"));
/*
let tipoCambio = (monto)=>{
    monto*3.18;
    console.log(tipoCambio);
}*/
//tipoCambio()