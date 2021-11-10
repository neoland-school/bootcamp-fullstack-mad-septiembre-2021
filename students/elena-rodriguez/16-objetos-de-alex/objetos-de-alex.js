/* 1- crear un objeto coche que tenga las siguientes propiedades y representa un seat leon (marca, modelo, matricula, numero de ruedas, color, velocidad actual, tiene la ITV pasada?)
2- pintar por pantalla si tiene o no la ITV pasada
3- añadir al objeto original la posibilidad de acelerar, pasando como entrada la nueva velocidad
4- llamar al metodo acelerar
5- pintar la nueva velocidad del coche */

const seatLeon = {
    marca: 'Seat',
    modelo: 'Leon',
    matricula: '6020GBR',
    ruedas: 4,
    color: 'rojo',
    velocidad: 120,
    itv: true
}
document.write(`Ha pasado la ITV &{coche.itv}`);
//document.write(`<p> 'Ha pasado la ITV' &{coche.itv} </p>`); esto sería igual, otra forma de expresar incluyendo el texto en un párrafo.
//document.write('Ha pasado la ITV' + coche.itv `); esto también sería igual.


seatLeon.acelerar = (a,b) => (a+b);

const velocidadactual = seatLeon.acelerar(seatLeon, 70); 
document.write(velocidadactual);

# Concepto del this

En JS el `this` funcion diferente a otros lenguajes de programación.

`this` es una palabra reservada del lenguaje que es de tipo `object` o `undefined`.

Este this representa el objeto owner (propietario) del contexto al que pertenece una línea de código y cambia su valor en función del ámbito donde se ejecuta la línea de código.

Hay principalmente dos tipos de contexto (global y local).

## Contexto Global

Es el contexto general de la aplicación (fuera de una función). En este, el `this` toma el valor del objeto global, que varía en función de si estamos en un navegador o en un servidor.

- En un navegador el objeto global es el `window`, que es un objeto que reprenta la ventana del navegador en la que estamos ejecutando nuestra web.

- En el servidor lo veremos más adelante.

Desde hace pocos años se puede acceder a un objeto llamado `globalThis` que siempre va a devolver el objeto global. globalThis será igual a this en el ámbito global.

## Contexto de función

Este es el contexto de todo aquello que se ejecuta dentro de una función. 

### ¿Cual es el valor de this dentro de una función?

Aqui tendremos varios caso. Como norma general. Dentro de una función el valor del this depende del valor del padre donde esté contenido.

- Si la función es global, el padre es el contexto global y por tanto `this` tomará el valor del objeto global.

- Si la función pertenece a un `object` como propiedad, el `this` toma el valor del objeto al que pertenece.

```js
let a = {
  prop: 34,
  fn: function(){
    this.prop += 20;
    console.log(this.prop)
  }

}

a.fn(); // pinta 54 y ha actualizado el valor de prop de `a` a 54

```

Objetos anidados

```js
let a = {
  prop: 34,
  b: {
    prop: 44,
    fn: function(){
            this.prop += 20;
            console.log(this.prop)
        }
  },
  fn: function(){
    this.prop += 20;
    console.log(this.prop)
  }
}

a.fn(); // pinta 54 y ha actualizado el valor de prop de `a` a 54
a.b.fn(); // pinta 64 (objeto al que pertenece) ha actualizado el valor de prop de `b` a 64