1. Crear un componente de reactJS llamado CityMadrid. Este componente pintará un H1 con el nombre de la ciudad y  un p con su población (Madríd tiene 3,207,247 de habitantes). El componente debe tener un borde de 1 px para poder diferenciarlo.

2. Crear un componente de reactJS llamado CityBarcelona. Este componente pintará un H1 con el nombre de la ciudad y  un p con su población (Barcelona tiene 1,611,822 de habitantes). El componente debe tener un borde de 1 px para poder diferenciarlo.

3. Crear un componente de reactJS llamad CitySevilla. Este componente pintará un H1 con el nombre de la ciudad y  un p con su población (Sevilla tiene 700,169 de habitantes). El componente debe tener un borde de 1 px para poder diferenciarlo.
¿Y si os pido que pintéis todas las ciudades de españa? ¿Veis el problema?

Estamos duplicando el mismo componente constantemente y si tuviesemos 10000 ciudades tendríamos que hacer 10000 componentes iguales, lo unico que cambian son los datos de la ciudad que pinto. Esto nos llevaría muchisimo tiempo y sería el infierno. Vamos a hacer que podamos reutilizar el componente

4. Crear un componente City que reciba por props el Nombre de la ciudad y su población. Eliminar los componentes de CityMadrid, CityBarcelona y CitySevilla y pintar en el App las citys de Madrid, Barcelona y Sevilla con el componente City

Vale ya tendremos un componente que pinta una ciudad si les pasamos los datos. Ahora vamos a hacer un contenedor que pinte una lista de ciudades

5. Crear un componente CityList que lo que hace es pintar una lista de ciudades. De momento pondremos una lista fija:
[
    {
        "city": "Álava",
        "population": 321932,
	"utf": "%C3%81lava"
    },
    {
        "city": "Ávila",
        "population": 59258,
	"utf": "%C3%81vila"
    },
    {
        "city": "Albacete",
        "population": 172693,
	"utf": "Albacete"
    },
    {
        "city": "Alicante",
        "population": 335052,
	"utf":"Alicante"
    },
    {
        "city": "Almería",
        "population": 192697,
	"utf":"Almer%C3%ADa"
    },
    {
        "city": "Asturias",
        "population": 1062000,
	"utf":"Asturias"
    }
]

6. Modificar el componente CityList para que pinte la lista de ciudades que devuelve esta URL (https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json)


7. Vamos a escribir unos filtros. Modificar el componente CityList para que tenga un input que cuando se escriba, se filtren las ciudades que cuyo nombre contenga lo que el usuario escribió



8. Vamos a añadir otro tipo de filtro. Modificar el componente CityList para que tenga un rango (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) de 0 a 5 millones. Cuando el usuario modifique el rango se mostrarán las ciudades que tengan una población superior al valor seleccionado