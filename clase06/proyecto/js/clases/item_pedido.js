class ItemPedido{
    constructor(){
        this.id_plato="";
        this.nombre_plato="";
        this.cantidad=0;
        this.precio_plato=0;
        this.total=0;
    }
    calcularTotal(){
        return this.cantidad*this.precio_plato;
    }
}