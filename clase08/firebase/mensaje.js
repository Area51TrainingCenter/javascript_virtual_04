class Mensaje{
    constructor(usuario,cuerpo){
        let fecha_creacion=new Date();
        this.usuario=usuario;
        this.cuerpo=cuerpo;
        this.fecha=fecha_creacion.getDate()+"/"+(fecha_creacion.getMonth()+1)+"/"+fecha_creacion.getFullYear();
        this.hora=fecha_creacion.getHours()+":"+fecha_creacion.getMinutes()+":"+fecha_creacion.getSeconds();

    }
}