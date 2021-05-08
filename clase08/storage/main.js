//
//sessionStorage.setItem("codigo",123);
//sessionStorage.usuario="jcrt123";


console.log(sessionStorage.usuario);

//console.log(sessionStorage.getItem("usuario"));

//console.log(sessionStorage.removeItem("codigo"))
//console.log(sessionStorage.key("usuario"))
//sessionStorage.clear();

// 
localStorage.setItem("login",true);
console.log(localStorage.getItem("login"))

if(localStorage.getItem("login")=="true"){

}


let config={
    audio:false,
    scroll:true,
    color:true
}
let usuario={
    nombre:"JC",
    codigo:123
}
let obj_texto=JSON.stringify(usuario)
console.log(obj_texto);
localStorage.setItem("dato_usuario",obj_texto);




let res=localStorage.getItem("dato_usuario")
console.log(res);

let resobj=JSON.parse(res);
console.log(resobj)
console.log(resobj.nombre);
