class StateComponent extends React.Component {

    constructor() {
        super();
        // el objeto state se tiene que inicializar en el constructor
        this.state = {
            saludo: 'Hola'
        }
    }

    updateText() {
        this.setState({ saludo: this.state.saludo === 'Hola' ? 'Adios' : 'Hola' })
    }

    render() {
        return (
            <React.Fragment>
                <p> {this.state.saludo}</p>
                <button onClick={() => this.updateText()}>Clickeame</button>
            </React.Fragment>
        )
    }
}