class Productos{
    constructor(precio, nombre){
        this.precio = precio;
        this.nombre = nombre;
        this.cantidad = 0;
        this.estado = false;
        this.total = 0;
    }
    getprecio(){
        return this.precio;
    }
    setprecio(precio){
        this.precio = precio;
    }  
    getnombre(){
        return this.nombre;
    }
    setnombre(nombre){
        this.nombre = nombre;
    }
    getcantidad(){
        return this.cantidad;
    }
    setcantidad(cantidad){
        this.cantidad = cantidad;
    }
    getestado(){
        return this.estado;
    }
    setestado(estado){
        this.estado = estado;
    }
    getTotal(){
        return this.total;
    }
    setTotal(total){
        this.total = total;
    }

    agregar(){
        if (this.estado===false){
            let nuevoProd =document.createElement("div");
            this.cantidad = 1;
            nuevoProd.className = "producto";
            nuevoProd.textContent = this.nombre + " " + this.precio + " " + this.cantidad;
            this.estado = true;
            nuevoProd.id = this.nombre;
            document.getElementById("carrito").appendChild(nuevoProd);
            this.total = this.precio;
        }
        else{
            this.cantidad ++;
        }
    }

    eliminar(){
        if (this.cantidad<1)
            return;
        let prod = document.getElementById(this.nombre);
        if (this.cantidad===1){
            prod.remove();
            this.estado = false;
            this.cantidad = 0;
        }
        else 
            this.cantidad --;

    }

    suma(){
        this.total=this.cantidad*this.precio;
        return this.total;
    }
}

productosEx=[
    new Productos (1500, "Gorra"),
    new Productos (2000, "Labubu"),
    new Productos (3500, "PlayStation 4"),
    new Productos (50, "Maruchan"),
    new Productos (20, "Lápiz"),
    new Productos (1500, "Lego Technic"),
    new Productos (30, "Gomitas"),
    new Productos (500, "Playera"),
    new Productos (150, "Paracetamol"),
]

let total = 0;

document.getElementById("agregar 1").addEventListener("click",()=>{
    productosEx[0].agregar();
    total=productosEx[0].suma() + total;
});

document.getElementById("agregar 2").addEventListener("click",()=>{
    productosEx[1].agregar();
    total=productosEx[1].suma() + total;
});

document.getElementById("agregar 3").addEventListener("click",()=>{
    productosEx[2].agregar();
    total=productosEx[2].suma() + total;
});

document.getElementById("agregar 4").addEventListener("click",()=>{
    productosEx[3].agregar();
    total=productosEx[3].suma() + total;
});

document.getElementById("agregar 5").addEventListener("click",()=>{
    productosEx[4].agregar();
    total=productosEx[4].suma() + total;
});

document.getElementById("agregar 6").addEventListener("click",()=>{
    productosEx[5].agregar();
    total=productosEx[5].suma() + total;
});

document.getElementById("agregar 7").addEventListener("click",()=>{
    productosEx[6].agregar();
    total=productosEx[6].suma() + total;
});

document.getElementById("agregar 8").addEventListener("click",()=>{
    productosEx[7].agregar();
    total=productosEx[7].suma() + total;
});

document.getElementById("agregar 9").addEventListener("click",()=>{
    productosEx[8].agregar();
    total=productosEx[8].suma() + total;
});

document.getElementById("eliminar 1").addEventListener("click",()=>{
    productosEx[0].eliminar();
});
document.getElementById("eliminar 2").addEventListener("click",()=>{
    productosEx[1].eliminar();
});

document.getElementById("eliminar 3").addEventListener("click",()=>{
    productosEx[2].eliminar();
});

document.getElementById("eliminar 4").addEventListener("click",()=>{
    productosEx[3].eliminar();
});

document.getElementById("eliminar 5").addEventListener("click",()=>{
    productosEx[4].eliminar();
});

document.getElementById("eliminar 6").addEventListener("click",()=>{
    productosEx[5].eliminar();
});

document.getElementById("eliminar 7").addEventListener("click",()=>{
    productosEx[6].eliminar();
});

document.getElementById("eliminar 8").addEventListener("click",()=>{
    productosEx[7].eliminar();
});

document.getElementById("eliminar 9").addEventListener("click",()=>{
    productosEx[8].eliminar();
});
