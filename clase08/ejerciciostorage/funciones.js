function login(){
    let user=document.getElementById("inp-user").value
    let password=document.getElementById("inp-password").value
 
    if(user=="admin" && password=="1234"){
        console.log("Login exitoso")
        setLoginStorage(1)
        window.location.href="inicio.html"

    }
    else{
        console.log("error")
    }
}

function getLoginStorage(){
    return localStorage.getItem("login")
}

function setLoginStorage(valor){
    // valor : 1 | 0
    localStorage.setItem("login",valor)

}

function cerrar_sesion(){
    setLoginStorage(0);
    window.location.href="login.html"

}