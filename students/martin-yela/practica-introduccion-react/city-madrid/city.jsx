// 4. Crear un componente City que reciba por props el Nombre de la ciudad y su población. Eliminar los componentes de CityMadrid, CityBarcelona y CitySevilla y pintar en el App las citys de Madrid, Barcelona y Sevilla con el componente City

class City extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className= 'bordes'>
                <h1>{this.props.cities.city}</h1>
                <p>{this.props.cities.population}</p>
            </div>
        )
    }
}