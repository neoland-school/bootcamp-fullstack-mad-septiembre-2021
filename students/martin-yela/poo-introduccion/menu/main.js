// 1- Crear una clase menú que represente un almuerzo. Todos los menús anteriores deben heredar de este. (Primer plato, segundo plato, bebida, postre, mostrarPrecio())
// 2- Crear una clase que represente un menú vegetariano.
// 3- Crear una clase que represente un menú bajo en calorías.
// 4- Crear una clase que represente un menú carnívoro.
// 5- Crear un objeto de cada clase e imprimir por pantalla el precio del menú.
// 6- Implementar la función 'updatePrice(newPrice)' como propiedad de la clase menú. Esta función debe cambiar el precio del menú, por el que reciba por parámetro(newPrice).
// 7- Implementar la función 'changeDish(kind, newDish)' como propiedad de la clase menú. Esta función debe cambiar el plato que se le ordene (primero, segundo, bebida o postre <- decisión libre el determinar la forma de controlarlo) por el nuevo plato introducido por parámetro (newDish).
// 8- Cambiar el precio de todos los menús y mostrar el menú antes y después del cambio
// 9- Cambiar un plato diferente de cada menú y mostrar por pantalla el objeto antes del cambio y después del cambio.

class Menu {
    constructor(primero,segundo, bebida, postre){
        this.primero = primero;
        this.segundo = segundo;
        this.bebida = bebida;
        this.postre = postre;
    }
    mostrarPrecio(){
        let precio = document.createElement('p');
        precio.textContent = `El precio del menu ${this.tipo} es de ${this.precio} euros`;
        document.querySelector('body').appendChild(precio);
    }
    updatePrice(newPrice) {
        let oldPrice = this.precio;
        this.precio = newPrice;
        let precios = document.createElement('p');
        precios.textContent = `El precio anterior es ${oldPrice} y el precio actual es  ${this.precio}`;
        document.querySelector('body').appendChild(precios);
    }
    changeDish(kind, newDish) {
        let oldPlate;
        switch (kind){
            case 'primero': 
                oldPlate = this.primero;
                this.primero = newDish;
                break;
            case 'segundo': 
                oldPlate = this.segundo;
                this.segundo = newDish;
                break;
            case 'bebida': 
                oldPlate = this.bebida;
                this.bebida = newDish;
                break;
            case 'postre': 
                oldPlate = this.postre;
                this.postre = newDish;
                break;
            default : 
                break;
        }
        this.kind = newDish;
        let platos = document.createElement('p');
        platos.textContent = `El plato anterior es ${oldPlate} y el plato actual es  ${this.kind}`;
        document.querySelector('body').appendChild(platos);
    }
}

class MenuVeg extends Menu{
    constructor(primero,segundo, bebida, postre, precio, tipo){
        super(primero,segundo, bebida, postre);
        this.precio = 11;
        this.tipo = 'vegano';
    }
}
class BajaCal extends Menu{
    constructor(primero,segundo, bebida, postre, precio, tipo){
        super(primero,segundo, bebida, postre);
        this.precio = 12;
        this.tipo = 'bajo en calorias';
    }
}
class MenuCarn extends Menu{
    constructor(primero,segundo, bebida, postre, precio, tipo){
        super(primero,segundo, bebida, postre);
        this.precio = 14;
        this.tipo = 'menu carne';
    }
}


let vegano = new MenuVeg('verdura', 'masVerdura', 'sumo', 'fruta');
let paraGordos = new BajaCal('verdura light', 'mas Verdura light', 'sumo sin azúcar', 'fruta');
let carnivoro = new MenuCarn('chuleton', 'solomillo', 'vino en caja', 'tarta');

vegano.mostrarPrecio();
paraGordos.mostrarPrecio();
carnivoro.mostrarPrecio();
vegano.updatePrice(15);
vegano.changeDish('primero', 'alcachofa');
console.log(vegano.primero);