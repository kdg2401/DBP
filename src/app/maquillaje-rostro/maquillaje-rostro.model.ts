export class Producto {

    nombre:String = "";
    codigo:String = "";
    marca:String = "";
    precio:Number = 0;

    constructor(nombre:String, codigo:String, marca:String, precio:Number){
        this.nombre = nombre;
        this.codigo = codigo;
        this.marca = marca;
        this.precio = precio;
    }
}