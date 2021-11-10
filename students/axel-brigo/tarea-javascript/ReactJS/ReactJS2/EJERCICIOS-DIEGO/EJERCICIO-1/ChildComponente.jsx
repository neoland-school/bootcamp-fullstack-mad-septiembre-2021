
class ChildComponente extends React.Component {

    constructor(props) {

        super(props)
    }


    render() {
        return (
            // accedo a traves del this a la prop `name` pasada por el componente que consuma este Child Component
            <h1>Hello, as pulsado el boton estas veces: {this.props.pepito}</h1>
        )
    }



}

