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

    console.log(mapa);

}

