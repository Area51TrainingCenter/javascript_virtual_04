let valor=123;
if(valor<123){
    // en caso sea True
}
else{
    // en caso sea Talse
}

let opcion; // A, B ,C , D;
opcion="a"
opcion=opcion.toUpperCase();

switch(opcion){
 
    case "A":
    case "a":
        console.log("la opcion elegida fue la A")
        // contenido de codigo
        break;
    case "B":
        console.log("la opcion elegida fue la B")
        // contenido de codigo
        break;
    case "C":
        console.log("la opcion elegida fue la C")
        // contenido de codigo
        break;
    case "D":
    case "E":
    case "F":
        console.log("la opcion elegida fue la D")
        // contenido de codigo
        break;
    default:
        console.log("la opcion no es reconida")
        break;
}