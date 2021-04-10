console.log("promesas")
let promesa=new Promise((resolve,reject)=>{
    let edad=16;
    if(edad<18){
        let info={
            estado:1,
            mensaje:"es menor de edad"
        }
        resolve(info); // .then ()

    }
    else{
        let info={
            estado:2,
            mensaje:"NO es menor de edad"
        }
        reject(info); // .catch()
    }
})



// resolve()
promesa.then((data)=>{
//   console.log("estoy dentro del then")
// console.log(data)
})

// reject
promesa.catch((data)=>{
    // console.log("estoy dentro del catch")
})



let consultaSitios=new Promise((resolve,reject)=>{
  
    let url_categoria="http://sminnova.com/restapitrujillo/sitiosturisticos/categoria/1";
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url_categoria)
    xhr.send()
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4){
          if(xhr.status==200){
              let resultado=JSON.parse(xhr.responseText);
              resolve(resultado)
          }
          else{
              reject({erro:"Hubo un error al momento de solicitiar la informacion"})
          }
      }
    }

})

consultaSitios.then((data)=>{
    console.log("ejecutanod el Then")
    console.log(data)
    

})

consultaSitios.catch((data)=>{
    console.log(data);
})