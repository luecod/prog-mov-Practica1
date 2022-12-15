class Producto{
    constructor(producto,nombre,cantidad,precio){
        this.producto = producto;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    get Producto(){
        return this.producto;
    }
    set Producto(producto){
        this.producto=producto;
    }
    get Nombre(){
        return this.nombre;
    }
    set Nombre(nombre){
        this.nombre=nombre;
    }
    get Cantidad(){
        return this.cantidad;
    }
    set Cantidad(cantidad){
        this.cantidad=cantidad;
    }
    get Precio(){
        return this.precio;
    }
    set Precio(precio){
        this.precio=precio;
    }
}