class City extends React.Component {
    constructor(props) {
        super(props);

    }





    render() {
        return (
            <div className="border">
                <h1>Ciudad: {this.props.ciudad.city}</h1>
                <p>Cantidad de habitantes: {this.props.ciudad.population}</p>
            </div>
        )
    }

}