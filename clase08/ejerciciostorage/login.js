console.log(getLoginStorage());

if(getLoginStorage()=="1"){
    console.log("Ya estoy logeado deberia de rerigir")
    window.location.href="inicio.html"
}
else{
    console.log("Si deberia poder quedarme aquí")
}