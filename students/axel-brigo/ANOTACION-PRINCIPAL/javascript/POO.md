# Introduccion a la programacion orientada a objetos

Surge de una necesidad para poder representar y gestionar el mundo que queremos implementar, de una manera mas limpia y ordenada.

Tiene 4 pilares fundamentales:

- **Encapsulación**: Antes de la POO las caracteristicas y metodos de una entidad de nuestro programa estaban dispersas por todo el codigo, la encapsulación te ayuda a situar toda esta información en un mismo sitio.

-**Abstracción** : Te ayud a poder utilizar las entidades, sin conocer el detalle de implementacion de las mismas.

- **Herencia** :  Permite que existan entidades generales y que luego puedas crear entidades mas especificas que reciban propiedades y metodos de esas entidades mas generales.

-**Polimorfismo**:  Un tipo puede tener multiples formas (tantas como clases descendientes tenga)

Para poder trabajar de esta forma tenemos dos elementos/conceptos:

- **clase**: representa la definicion de una entidad dentro del mundo de mi programa.
Ejemplo: Vehiculo, Coche, Gato, Persona, EMmpleado, Clase, etc. Dentro de una clase se definen las propiedades y los metodos que puedo hacer con mi entidad.

- **Objeto**: Representa un individio concreto de la entidad de una clase. Es una entidad real que tiene los valores concretos de sus propiedades. A esto se le conoce como `instancia`, es decir, un objeto es una instancia de una clase.

## Como creo una clase?

Una clase siempre tiene lo que se conoce como `constructor`, que es una funcion especial que se llama cada vez que cree un objeto de esa clase y sirve para incializar las propiedades de la misma.

```js
// para crear una clase utilizo la palabra  reservada class

class NombreClaseCammelCase { //el nombre de la clase tiene que ser cammel case y mayuscula

constructor(valor){
    //esa función se llama cada vez que cree un objeto de esta clase y sirve para inicializar las propiedades de la misma.
    this.propName = valor; // asignamos las propiedades que queramos al this de la clase para luego utilizarlas en otros métodos. Se le pueden asignar valores que vengan por parámetro de entrada del constructor o valores estáticos si fuese necesario
    this.otherProp = 4;

}

classMethod(param){
    // aqui va el codigo de ese método de la clase. Puede acceder a las propiedades del this de la clase y utilizarlas, devolverlas o lo que necesitemos.
    this.otherProp++; // actualiza la propiedades (estado) de esta clase 
    }

}
```

## Como creo un objeto de una clase?

Para generar una instancia de un objeto tengo que utilizar la palabra reservada `new`

```js

const obj = new NombreClaseCammelCase('valor_prop'); //esto crea un objeto de la clase NombreClaseCamelCase y lo almacena en la variable `obj` 

// a partir de aqui puedo utilizar los metodos y propiedades del objeto, definidos en la clase
obj.classMethod('valor_param'); //llama al metodo classMethod con un parámetro de entrada

```

## Ejemplo mas real

Vamos a representar un perro.

Como propiedades este perro tendrá:

- Propiedades

    - nombre
    - nobreDueño
    - raza
    - edad
    - estaVacuna
    - genero

- Metodos

    - cumplirAños
    - obtenerAñosHumanos
    - vacunar
    - cambiarDueño

    ```js

    //lo primero es crear la clase con su implementación

    class Dog { //inicio la definicion e implementacion de la clase

        constructor(name, ownerName) { // creo el constructor para iniciar las propiedades
            this.name = name;
            this.ownerName =  ownerName;
            this.age = 0;
            this.breed = breed;
            this.isVaccinated = false;
            this.gender = gender;
        }

        turnYears(){  // añadimos 1 a los años del perro
            this.age++;
        }

        retrieveHumanYears(){
            return this.age * 7; // "supuestamente" un año perruno son 7 humanos
        }

        vaccinate(){
            this.isVaccinated = true;
        }
        
        changeOwner(newOwner){
            this.ownerName = newOwner;
        }
    }

    const simba = new Dog('Simba', 'Alex', 'Golden Retriever', 'Female');
    console.log(simba.age); // pinto por consola la edad de simba --> 0
    simba.turnYears();
    console.log(simba.age); // pinto por consola la edad de sumba --> 1
    console.log(simba.retrieveHumanYears()) // pinto sus años humanos
    ```