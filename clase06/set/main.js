let lista=new Set();
lista.add(5);
lista.add(3);
lista.add(1);
lista.add(3);
lista.add(5);
lista.add(5);
lista.add(4);
lista.add("jramos@gmail.com")
lista.add("jramos@gmail.com")
lista.add(true)
lista.add(false)
lista.add(true)

//console.log(lista);
//console.log("existen", lista.size)
for (let item of lista){
  //  console.log(item)
}
console.log(lista.has("jramos@gmail.com"))

for(let item of lista){
    console.log(item)
}
