    let url_categoria="http://sminnova.com/restapitrujillo/sitiosturisticos/categoria/1";
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url_categoria)
    xhr.send()
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4){
          if(xhr.status==200){
              let resultado=JSON.parse(xhr.responseText);
              //console.log(resultado[0].id);
              let id=resultado[0].id;

              let url2="http://sminnova.com/restapitrujillo/sitiosturisticos/id/"+id
              let xhr2=new XMLHttpRequest()
              xhr2.open("GET",url2)
              xhr2.send()
              xhr2.onreadystatechange=function(){
                  if(xhr2.readyState==4){
                      if(xhr2.status==200){
                          let resultado=JSON.parse(xhr2.responseText);
                          console.log(resultado);





                      }
                  }
              }


          }
          else{
          
          }
      }
    }


let consulta=new Promise((resolve,reject)=>{

        let url_categoria="http://sminnova.com/restapitrujillo/sitiosturisticos/categoria/1";
        let xhr=new XMLHttpRequest();
        xhr.open("GET",url_categoria)
        xhr.send()
        xhr.onreadystatechange=function(){
          if(xhr.readyState==4){
              if(xhr.status==200){
                  let resultado=JSON.parse(xhr.responseText);
             
                  let id=resultado[0].id;

                  resolve(id);
    
              }
              else{
                 reject();
              }
          }
        }
    
})




consulta.then((data)=>{

    
    let url2="http://sminnova.com/restapitrujillo/sitiosturisticos/id/"+id
    let xhr2=new XMLHttpRequest()
    xhr2.open("GET",url2)
    xhr2.send()
    xhr2.onreadystatechange=function(){
        if(xhr2.readyState==4){
            if(xhr2.status==200){
                let resultado=JSON.parse(xhr2.responseText);
                console.log(resultado);

            }
        }
    }

})
consulta.catch((data)=>{

})

   