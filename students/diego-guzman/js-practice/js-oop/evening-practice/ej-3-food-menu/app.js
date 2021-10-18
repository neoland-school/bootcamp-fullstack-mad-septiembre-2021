// 1- Crear una clase menú que represente un almuerzo. Todos los menús posteriores deben heredar de este. (Primer plato, segundo plato, bebida, postre, precio, mostrarPrecio())

class Menu {
    constructor(firstCourse, mainCourse, drink, dessert, price){
        this.firstCourse = firstCourse;
        this.mainCourse = mainCourse;
        this.drink = drink;
        this.dessert = dessert;
        this.price = price;
    }

    showPrice(){
        const menuPrice = document.createElement('p');
        menuPrice.textContent = `the price of this menu is ${this.price}`;
        document.querySelector('.main__container').appendChild(menuPrice);
    }
}

class Veggie extends Menu {
    constructor(firstCourse, mainCourse, drink, dessert, price){
    super (firstCourse, mainCourse, drink, dessert, price);
    }
}

const menuVeggie = new Veggie ('Lentils soup', 'Soja with pasta', 'kombucha', 'veggie mouse', '9.90$');
menuVeggie.showPrice();