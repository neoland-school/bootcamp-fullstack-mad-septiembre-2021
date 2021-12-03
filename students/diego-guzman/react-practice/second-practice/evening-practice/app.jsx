// 1.- Crear un componente padre que tenga un botón que sume 1 a una variable de estado cada vez que se pulse. 
// Además este componente llamará al componente del ejercicio 
// 2  y le pasará por props la variable de estado del padre.
// 2.- Crear un componente que muestre el siguiente texto "Has pulsado x veces el botón.".
//  X será una variable de estado y su valor llegará al componente por props.


class App extends React.Component {

    constructor() {
        super()
    }

    render() {
        return <React.Fragment>
            <Pdom/>
        </React.Fragment>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('main__div')
);