class Pedido{
    constructor(nombre,direccion,telefono,tipo_pago,total_pagar,detalle_pedido){
       // this.hora="";
       // this.fecha="";
       let date=new Date();
       this.hora=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
       this.fecha=date.getDate()+"/" + date.getMonth() + "/" + date.getFullYear();
        this.nombre=nombre;
        this.direccion=direccion;
        this.telefono=telefono;
        this.tipo_pago=tipo_pago;
        this.total_pagar=total_pagar;
        this.detalle_pedido=detalle_pedido;
    }
    setHoraFecha(){
        let date=new Date();
        this.hora=date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
        this.fecha=date.getDate()+" / " + date.getMonth() + "/ " + date.getFullYear();

    }
}