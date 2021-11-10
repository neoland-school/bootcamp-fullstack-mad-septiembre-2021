// Perfecto ahora tenemos un componente que pinta una lista de ciudades. Si lo ponemos en el App podemos visualizar esta lista de ciudades.

// El problema es que los datos no los podemos tener en la app, ya que pueden ser variables y modificarse con el tiempo y si los ponemos en local, no estarían actualizados.

// Necesitamos traerlos de un servidor!

// 6. Modificar el componente CityList para que pinte la lista de ciudades que devuelve esta URL (https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json)

// 8. Vamos a añadir otro tipo de filtro. Modificar el componente CityList para que tenga un rango (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) de 0 a 5 millones. Cuando el usuario modifique el rango se mostrarán las ciudades que tengan una población superior al valor seleccionado

class City_superList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // Creamos 2 array, uno que quedará con valor constante y otro que contendrá los valores filtrados
            cities_super_CONST: [],
            cities_super_FILTER: []
        }

    }
    // pedimos al servidor el archivo y lo traducimos. Lo guradamos en ciudadesfetch
    async componentDidMount() {
        const r = await fetch('https://raw.githubusercontent.com/iblancasa/GitHub-DataProcessor-Spain/master/cities.json')
        const ciudadesfetch = await r.json();
        this.setState({
            // rellenamos los arrays con ciudadesfetch
            cities_super_CONST: ciudadesfetch,
            cities_super_FILTER: ciudadesfetch
        });
    }

    render () {
        
        return(
            <React.Fragment>
                {/* creamos el input con el evento. guardamos el valor del input en wordsInput en minúsculas usando e.target.value */}
                <input type="text" placeholder="Encuentra la población de una la ciudad"  onChange={ (e) => {
                    let wordsInput = e.target.value.toLowerCase();
                        // guardamos en coincidences la propiedad (que en este caso es un array) cities_super_CONST del objeto this al que se le ha aplicado el método state en el constructor, para que pueda ser actualizado. Es decir: this es un objeto y state es un método. Hacemos un filter a la propiedad cities_super_CONST y  ese filtrado lo guardamos en coincidences. Es necesario pasar todo a minúsculas y en el filter decir que se incluya el texto del wordsInput
                    let coincidences = this.state.cities_super_CONST.filter(a => a.city.toLowerCase().includes(wordsInput));
                
                         // decimos que tras haber introducido el wordtext, y por eso debe ir en esta línea de código, se introduzca el valor de coincidences dentro del array cities_super_FILTER, para que actualice su valor con las coincidences
                    this.setState({cities_super_FILTER: coincidences})
                }
                } />

                <div>
                    {/* Pinta tantos Componentes Cities_hija_city_List como ciudades me devuelva el servidor*/}
                    { this.state.cities_super_FILTER.map(a => <Cities_hija_city_List key={a.i} nombre={a.city} habitantes={a.population} ></Cities_hija_city_List>) }
                 </div>
            </React.Fragment>
        )
    }

}

