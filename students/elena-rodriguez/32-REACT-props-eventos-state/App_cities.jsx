
// Crear un componente de reactJS llamado CityBarcelona. Este componente pintará un H1 con el nombre de la ciudad y  un p con su población (Barcelona tiene 1,611,822 de habitantes). El componente debe tener un borde de 1 px para poder diferenciarlo.
// Crear un componente de reactJS llamad CitySevilla. Este componente pintará un H1 con el nombre de la ciudad y  un p con su población (Sevilla tiene 700,169 de habitantes). El componente debe tener un borde de 1 px para poder diferenciarlo.

// 4. Crear un componente City que reciba por props el Nombre de la ciudad y su población. Eliminar los componentes de CityMadrid, CityBarcelona y CitySevilla y pintar en el App las citys de Madrid, Barcelona y Sevilla con el componente City
// Vale ya tendremos un componente que pinta una ciudad si les pasamos los datos. Ahora vamos a hacer un contenedor que pinte una lista de ciudades
// 5. Crear un componente CityList que lo que hace es pintar una lista de ciudades. De momento pondremos una lista fija:


class App_cities extends React.Component{
    constructor(props) { // las props vienen como parámetro de entrada del constructor y es un objeto
        super(props); // le paso las props al padre de la clase (de la herencia, es decir React.Component) en el super 
        this.ciudades =  [
            {name: "Madrid", population:3207247}, 
            {name: "Sevilla", population: 700169},
            {name: "Barcelona", population: 1611822}
        ]
    }


    render(){
        return (
            <React.Fragment>
      
                 <City_barcelona></City_barcelona>
                 <City_sevilla></City_sevilla>
                 <City_madrid></City_madrid>
                 {/* hacemos un map que recorra el this de ciudades y le decimos que el componente creado con la clase Cities se le incluya una propr nombre y habitantes para que devuelva el valor de cada props */}
                {this.ciudades.map((e, i) => <Cities nombre={e.name} habitantes={e.population} key={i} ></Cities>)}
                {/* a map le introducimos una key, un identificador único para que no nos saque un warning. React quiere que cada elemento de un bucle tenga un identificador. */}
                <City_list></City_list>
                <City_superList></City_superList>
        
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App_cities />,
    document.getElementById('root')
);