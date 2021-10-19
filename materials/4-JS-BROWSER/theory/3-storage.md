# Storage en el navegador

Nos sirve para almacenar información en el navegador y que pueda ser recupara en siguientes navegaciones del usuario.

Hay varios tipo, veremos 3:

## LocalStorage

Nos permite almacenar la información hasta que el usuario decida borrar en la configuración del navegador.

- Tiene vida **"Infinita"** (hasta que el usuario la borre a mano)
- Comparte la información entre pestañas o ventanas de una misma web.

¿Que puedo hacer con el local storage? CRUD, **Crear, Leer, Actualizar y Borrar**

El local storage se gestiona con un objeto global que se llama `localStorage`.

La información se guarda utilizando pares `clave:valor`, es decir, el dato (valor) que quiero guardar o utilizar tiene asociada una clave.

```js

// Crear/actualizar
localStorage.setItem('clave', 'valor'); // tanto clave como valor deberían ser de tipo string para evitar errores

// leer
const value = localStorage.getItem('clave'); // devuelve el valor de esa clave o null si no existe

// borrar
localStorage.removeItem('clave'); // elimina un valor con esa clave

```

Como el storage solo guarda strings, el intentará ejectura el método toString() de lo que introduzcamos como valor.

Esoto hará que el `getItem` siempre devuelva un string y podría producirnos problemas si no lo sabemos controlar.

Por tanto, el ejemplo completo necesita de la utilidad globla `JSON` para poder ayudar a guardar la información adeuadamente.

```js
// Crear/actualizar
localStorage.setItem('clave', JSON.stringify(valor)); // la clave es string y con este cambio el valor puede ser cualquier tipo de datos, menos función

// leer
const value = JSON.parse(localStorage.getItem('clave')); // devuelve el valor de esa clave en el tipo de datos original o null si no existe

// borrar
localStorage.removeItem('clave'); // no se ve afectado por el tipo de datos

```

## Session storage

Es igual que el local storage, pero su contenido se elimina al cerrar la pestaña. Sigue las mismas reglas que el localstorage, lo que pasa que utilizando el objeto global `sessionStorage`

```js
// Crear/actualizar
sessionStorage.setItem('clave', JSON.stringify(valor)); // la clave es string y con este cambio el valor puede ser cualquier tipo de datos, menos función

// leer
const value = JSON.parse(sessionStorage.getItem('clave')); // devuelve el valor de esa clave en el tipo de datos original o null si no existe

// borrar
sessionStorage.removeItem('clave'); // no se ve afectado por el tipo de datos
```
