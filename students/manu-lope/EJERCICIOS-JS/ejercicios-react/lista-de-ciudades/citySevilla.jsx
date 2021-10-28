class CitySevilla extends React.Component {
    constructor(props) {
        super(props)
    
    }
    render() {
        return (
            <div className="div__style">
                <h1>{this.props.nombre}:</h1>
                <p>Tiene {this.props.poblacion} de habitantes. </p>
            </div>

        )
    }
}