class Pedido{
    constructor(nombre_cliente,direccion,telefono,referencia,total_pagar,platos){
       // this.hora="";
       // this.fecha="";
       // agregar
        let date=new Date();
        this.hora=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
        this.fecha=date.getDate()+"/" + date.getMonth() + "/" + date.getFullYear();
        this.nombre_cliente=nombre_cliente;
        this.direccion=direccion;
        this.telefono=telefono;
        this.referencia=referencia;
        this.total_pagar=total_pagar;
        this.platos=platos;
    }
    setHoraFecha(){
        let date=new Date();
        this.hora=date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
        this.fecha=date.getDate()+" / " + date.getMonth() + "/ " + date.getFullYear();

    }
}