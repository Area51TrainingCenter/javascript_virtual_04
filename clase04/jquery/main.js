
// let ele=document.getElementById("opcion1")
// ele.addEventListener("click",tarea)
/*
$("#opcion1").click(function(){
    console.log("click en el primer elemento")
})*/

$(".opcion").click(function(){
    console.log("click")
    $(".opcion").removeClass("activado")
    $(this).addClass("activado")
    let titulo=$(this).attr("data-titulo")
    $("#titulo").text(titulo)
   //$("#titulo").addClass("color-green")
  //  $("#titulo").addClass("hide")
  //  $("#titulo").toggleClass("hide");

    // $("#titulo").hide();
    //$("#titulo").show();
    //$("#titulo").toggle();

   /* $("#listado-contenido").append("Contenido agregado despues del click");
    
    let configuracion_ajax={
        url:"http://sminnova.com/restapitrujillo/sitiosturisticos",
        success:function(data){
            console.log("peticion Success")
            console.log(JSON.parse(data))
        }
    }
    $.ajax(configuracion_ajax)*/

})