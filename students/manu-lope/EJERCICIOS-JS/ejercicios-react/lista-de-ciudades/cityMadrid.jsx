class CityMadrid extends React.Component {
    constructor(props) {
        super(props);
        this.madrid = {
            nombre: 'Madrid',
            poblacion: '3,207,247'
        }
    };

    render() {
        return (
            <div className="div__style">
                <h1>{this.props.nombre}:</h1>
                <p>Tiene {this.props.poblacion} de habitantes. </p>
            </div>
        )
    }
}