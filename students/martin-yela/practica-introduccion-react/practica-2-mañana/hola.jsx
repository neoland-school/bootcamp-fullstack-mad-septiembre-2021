// 1- Crear un componente que tenga un p que muestre 'hola' y un botón. cuando se pulse al botón el p tendrá que mostrar adiós
class ButtonHola extends React.Component {
    constructor() {
        super();
        this.state = {
            saludo:'hola'
        }
        
    }
    updateText() {
        // this.setState({saludo: this.state.saludo === 'hola'? 'adios': 'hola'})

        this.setState(oldState => {
            return {
                saludo: oldState.saludo === 'hola' ? 'adios' : 'hola'
            }
        });
    }
    render(){
        return (
            <React.Fragment>
                <button onClick={()=> this.updateText()}>Aprietame</button>
                <p>{this.state.saludo}</p>
            </React.Fragment>
        )
    }
}