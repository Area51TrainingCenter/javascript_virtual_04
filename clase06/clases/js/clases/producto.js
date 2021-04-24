// me permita almancenar la info de un producto
// nombre , precio , marca , codigobarrar, stock
// ObtenerStock indiquesiestadisponible

class Producto{
    constructor(nombre,precio,marca,codigoBarra,stock)
    {
        this.nombre=nombre,
        this.precio=precio,
        this.marca=marca,
        this.codigoBarra=codigoBarra,
        this.stock=stock;
    }
    obtenerNombre(){
        return this.nombre;
    }
    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }
    obtenerStock(){
        return this.stock;
    }
    getDisponibilidad(){
        let estado=false;
        if(this.stock>0){
            estado=true;
        }
        else{
            estado=false;
        }
        return estado;
    }
    getPrecioConIGV(){
        return this.precio*1.18;
    }
    getDescuento(cantidad){
        switch(cantidad){
            case 10:
                descuento=10;
                break;

        }
    }
}



