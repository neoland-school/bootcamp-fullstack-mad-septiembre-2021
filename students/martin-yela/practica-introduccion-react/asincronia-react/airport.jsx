// 1- Crear un componente de react que pinte un aeropueto por recibido como objeto por props. Tienen que pintar el (name, country, state, city, lat, long). Todos son P, aunque recubrirlos con un div que tenga un border de 1 px solid black, para que diferenciemos los aeropuertos

class Airport extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='card__airport'>
                <p>Name: {this.props.aeropuerto.name}</p>
                <p>Country: {this.props.aeropuerto.country}</p>
                <p>State: {this.props.aeropuerto.state}</p>
                <p>City:{this.props.aeropuerto.city}</p>
                <p>Lat:{this.props.aeropuerto.lat}</p>
                <p>Long: {this.props.aeropuerto.lon}</p>
            </div>
        )
    }
}