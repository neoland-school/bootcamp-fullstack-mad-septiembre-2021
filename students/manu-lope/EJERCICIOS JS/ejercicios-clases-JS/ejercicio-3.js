// 1- Crear una clase menú que represente un almuerzo. 
//Todos los menús anteriores deben heredar de este. 
//(Primer plato, segundo plato, bebida, postre, mostrarPrecio())

class Menu {

    constructor(starter, second, drink, dessert, price) {

        this.starter = starter;
        this.second = second;
        this.drink = drink;
        this.dessert = dessert;
        this.price = price;
    }

    showPrice() {
        let cost = document.createElement('p');
        cost.textContent = (`El precio de este menú es ${this.price}`);
        document.body.appendChild(cost);
    }

}

// 2- Crear una clase que represente un menú vegetariano.

class Veggie extends Menu {
    constructor(starter, second, drink, dessert, price){
        super (starter, second, drink, dessert, price);
    }
}

// 3- Crear una clase que represente un menú bajo en calorías.

class lowCal extends Menu {
    constructor(starter, second, drink, dessert, price){
        super (starter, second, drink, dessert, price);
    }
}

// 4- Crear una clase que represente un menú carnívoro.

class Meatie extends Menu {
    constructor(starter, second, drink, dessert, price){
        super (starter, second, drink, dessert, price);
    }
}

// 5- Crear un objeto de cada clase e imprimir por pantalla el precio del menú.

const menuNoMeat = new Veggie('Tofu hummus', 'Fake chicken','Kombucha', 'Vegan Cheesecake', '200€');
menuNoMeat.showPrice()

const menuLowCal = new lowCal('Air', 'Sliced cucumber','Water', 'Pure stevia', '2€');
menuLowCal.showPrice()

const menuAllMeat = new Meatie('raw cow meat', 'raw goat meat', 'raw morcilla', 'filete empanado en azucar', '1€' );
menuAllMeat.showPrice()


// 6- Implementar la función 'updatePrice(newPrice)' como propiedad de la clase menú. 
//Esta función debe cambiar el precio del menú, por el que reciba por parámetro(newPrice).

// 7- Implementar la función 'changeDish(kind, newDish)' como propiedad de la clase menú. 
//Esta función debe cambiar el plato que se le ordene (primero, segundo, bebida o 
//postre <- decisión libre el determinar la forma de controlarlo) por el nuevo plato introducido por parámetro (newDish).

// 8- Cambiar el precio de todos los menús y mostrar el menú antes y después del cambio

// 9- Cambiar un plato diferente de cada menú y mostrar por pantalla el objeto antes del cambio y después del cambio.