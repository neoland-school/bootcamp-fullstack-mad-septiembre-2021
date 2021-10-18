// 1- Crear una clase menú que represente un almuerzo. Todos los menús siguientes deben heredar de este. (Primer plato, segundo plato, bebida, postre, precio, mostrarPrecio())
// 2- Crear una clase que represente un menú vegetariano.
// 3- Crear una clase que represente un menú bajo en calorías.
// 4- Crear una clase que represente un menú carnívoro.
// 5- Crear un objeto de cada clase e imprimir por pantalla el precio del menú.
// 6- Implementar la función 'updatePrice(newPrice)' como propiedad de la clase menú. Esta función debe cambiar el precio del menú, por el que reciba por parámetro(newPrice).

// class Menu {
//     constructor(name, firstCourse, mainCourse, drink, dessert, price){
//         this.name = name;
//         this.firstCourse = firstCourse;
//         this.mainCourse = mainCourse;
//         this.drink = drink;
//         this.dessert = dessert;
//         this.price = price;
//     }

//     showPrice(){
//         const menuPrice = document.createElement('p');
//         menuPrice.textContent = `the price of ${this.name} menu is ${this.price}$`;
//         document.querySelector('.main__container').appendChild(menuPrice);
//     }
//     updatePrice(newPrice){
//         const updatedPrice = document.createElement('p');
//         updatedPrice.textContent= `The prices of the ingredients have increased lately, now the the price of ${this.name} menu is ${newPrice}$`;
//         document.querySelector('.main__container').appendChild(updatedPrice);
//     }
// }

// class Veggie extends Menu {
//     constructor(name, firstCourse, mainCourse, drink, dessert, price){
//     super (name, firstCourse, mainCourse, drink, dessert, price);
//     }
// }

// const menuVeggie = new Veggie ('Veggie','Lentils soup', 'Soja with pasta', 'kombucha', 'veggie mouse', 9.90);
// menuVeggie.showPrice();
// menuVeggie.updatePrice(12.90);

// class lowCal extends Menu {
//     constructor(name, firstCourse, mainCourse, drink, dessert, price){
//     super (name, firstCourse, mainCourse, drink, dessert, price);
//     }
// }
// const menuLowCal = new lowCal ('lowCal','clear soup', 'boiled chicken breast', 'water', 'apple', 7.90);
// menuVeggie.showPrice();
// menuVeggie.updatePrice(12.90);

// class meatEater extends Menu {
//     constructor(name, firstCourse, mainCourse, drink, dessert, price){
//     super (name, firstCourse, mainCourse, drink, dessert, price);
//     }
// }
// const menuMeatEater = new meatEater ('Meat eater','beef stew', 'roasted wild board with garnish', 'wine', 'cheesecake', 14.90);
// menuMeatEater.showPrice();
// menuMeatEater.updatePrice(17.90);


// 7- Implementar la función 'changeDish(kind, newDish)' como propiedad de la clase menú. Esta función debe cambiar el plato que se le ordene (primero, segundo, bebida o postre <- decisión libre el determinar la forma de controlarlo) por el nuevo plato introducido por parámetro (newDish).

// class Menu {
//     constructor(name, firstCourse, mainCourse, drink, dessert, price){
//         this.name = name;
//         this.firstCourse = firstCourse;
//         this.mainCourse = mainCourse;
//         this.drink = drink;
//         this.dessert = dessert;
//         this.price = price;
//     }

//     showPrice(){
//         const menuPrice = document.createElement('p');
//         menuPrice.textContent = `the price of ${this.name} menu is ${this.price}$`;
//         document.querySelector('.main__container').appendChild(menuPrice);
//     }
//     updatePrice(newPrice){
//         const updatedPrice = document.createElement('p');
//         updatedPrice.textContent= `The prices of the ingredients have increased lately, now the the price of ${this.name} menu is ${newPrice}$`;
//         document.querySelector('.main__container').appendChild(updatedPrice);
//     }

//     changeDish(kind, newDish){
//         if(kind==='firstCourse'){
//             this.firstCourse=newDish;
//         }
//         else if (kind===this.mainCourse){
//             this.mainCourse = newDish;
//         }
//         else if (kind===this.dessert){
//             this.dessert = newDish;
//         }
//         else if(kind===this.drink){
//             this.drink = newDish;
//         }
//     }
// }
// class Veggie extends Menu {
//     constructor(name, firstCourse, mainCourse, drink, dessert, price){
//     super (name, firstCourse, mainCourse, drink, dessert, price);

//     }
// }

// const menuVeggie = new Veggie ('Veggie','Lentils soup', 'Soja with pasta', 'kombucha', 'veggie mouse', 9.90);
// menuVeggie.showPrice();
// menuVeggie.updatePrice(12.90);
// menuVeggie.changeDish('firstCourse', 'omelette');


// 8- Cambiar el precio de todos los menús y mostrar el menú antes y después del cambio
class Menu {
    constructor(name, firstCourse, mainCourse, drink, dessert, price){
        this.name = name;
        this.firstCourse = firstCourse;
        this.mainCourse = mainCourse;
        this.drink = drink;
        this.dessert = dessert;
        this.price = price;
    }

    showPrice(){
        const menuPrice = document.createElement('p');
        menuPrice.textContent = `the price of ${this.name} menu is ${this.price}$`;
        document.querySelector('.main__container').appendChild(menuPrice);
    }
    updatePrice(newPrice){
        const updatedPrice = document.createElement('p');
        updatedPrice.textContent= `The prices of the ingredients have increased lately, now the the price of ${this.name} menu is ${newPrice}$`;
        document.querySelector('.main__container').appendChild(updatedPrice);
        return newPrice
    }
}

class Veggie extends Menu {
    constructor(name, firstCourse, mainCourse, drink, dessert, price){
    super (name, firstCourse, mainCourse, drink, dessert, price);
    }
}

const menuVeggie = new Veggie ('Veggie','Lentils soup', 'Soja with pasta', 'kombucha', 'veggie mouse', 9.90);
menuVeggie.showPrice();

class lowCal extends Menu {
    constructor(name, firstCourse, mainCourse, drink, dessert, price){
    super (name, firstCourse, mainCourse, drink, dessert, price);
    }
}
const menuLowCal = new lowCal ('lowCal','clear soup', 'boiled chicken breast', 'water', 'apple', 7.90);
menuVeggie.showPrice();

class meatEater extends Menu {
    constructor(name, firstCourse, mainCourse, drink, dessert, price){
    super (name, firstCourse, mainCourse, drink, dessert, price);
    }
}
const menuMeatEater = new meatEater ('Meat eater','beef stew', 'roasted wild board with garnish', 'wine', 'cheesecake', 14.90);
menuMeatEater.showPrice();

function printPrices(obj, newPrice){
    const menu = querySelector 
    const oldPriceDOM = document.createElement('p');
    const newPriceDOM = document.createElement('p');
    oldPriceDOM.textContent = `the old price was ${this.price}$`;
    newPriceDOM.textContent= `the new price is ${newPrice}$`;
    document.querySelector('.main__container').appendChild(oldPriceDOM);
    document.querySelector('.main__container').appendChild(newPriceDOM);

}

printPrices(17);
