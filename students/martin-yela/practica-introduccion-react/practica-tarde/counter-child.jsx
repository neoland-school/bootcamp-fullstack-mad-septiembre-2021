// 2.- Crear un componente que muestre el siguiente texto "Has pulsado x veces el botón.". X será una variable de estado y su valor llegará al componente por props.

class CounterChild extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <p>Has pulsado el botón {this.props.contador} veces</p>
        )
    }
}