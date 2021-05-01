let ele=document.getElementById("mapa")


function crearMapa(){

    let config_mapa={
        center: {lat:-12.0790769,lng:-77.0299626},
        zoom:15
        
    }
//crear un mapa tu necesitas 2 elementos 
// elemento html donde vas a poner el mapa
// la configuracion de mapa

    let mapa=new google.maps.Map(ele,config_mapa);
    let config_marker={
        position:{lat:-12.0790769,lng:-77.0299626},
        map:mapa,
        draggable:true,
        title:"Punto1"
        //icon:"https://icon-library.com/images/20x20-icon/20x20-icon-7.jpg"
        
    }

    let marker=new google.maps.Marker(config_marker)


  /*  let marker2=new google.maps.Marker({
        position:{lat:-12.0801103,lng:-77.0289488},
        map:mapa,
        title:"Punto2",
        animation:google.maps.Animation.BOUNCE,
        icon:""       
    })*/
    /*** Manejando evento del marker ***/

    google.maps.event.addListener(marker,"dragend",function(){
      // console.log(marker.getPosition().lat())
      // console.log(marker.getPosition().lng())
      let data_ubacion=marker.getPosition();

      var geocoder=new google.maps.Geocoder();
      geocoder.geocode({
          latLng:data_ubacion
      },function(response){
          if(response && response.length>0){
              document.getElementById("direccion").value=response[0].formatted_address
         }
          
      })

    })
    console.log(mapa);

}

function obtenerDireccion(){
    var geocoder=new google.maps.Geocoder();
    //geocoder.geocode(ubicacion,function a ejecutar)
   /*let ubi{
        latLng:
    }*/
    geocoder.gecode()
}
