console.log("objetoss")

let nombre;
let correo;
let telefono;
let curso;

let datos=["nombre","correo","telefono","curso"]

let usuario0={
    nombre:"Juan Carlos",
    correo:"jramos@gmail.com",
    telefono:"123123123",
    curso:"JS",
    estado:true,
    edad:22,
   
}

let usuario1={
    nombre:"Juan Carlos",
    correo:"jramos@gmail.com",
    telefono:"123123123",
    curso:"JS",
    estado:true,
    edad:22,
    notas:[10,15,18,11,20,16,17],
    direccion:{
        calle:"lima 102",
        distrito:"lima",
        referencia:"Calla Lima por el centro"
    }
}

let usuario2={
    nombre:"Carlos",
    correo:"carlos@gmail.com",
    telefono:"456456456",
    curso:"JS",
    estado:true,
    edad:22,
    notas:[10,15,18,11,20,16,17],
    direccion:{
        calle:"lima 102",
        distrito:"lima",
        referencia:"Calla Lima por el centro"
    }
}


let lista_usuario=[usuario1,usuario2];

console.log(datos);
console.log(usuario0)
console.log(usuario0.nombre)
console.log(usuario0.telefono)
console.log(usuario0.curso)
console.log("::::::::::::::::::")
console.log(usuario1)
console.log(usuario1.correo)
console.log(usuario1.direccion)
console.log(usuario1.direccion.calle)
console.log(usuario1.direccion.distrito)
             // []
console.log(usuario1.notas)
let indice=usuario1.notas.length-1
console.log(usuario1.notas[0])
console.log(usuario1.notas[indice])


console.log("::::::::::::::::")

console.log(lista_usuario);























