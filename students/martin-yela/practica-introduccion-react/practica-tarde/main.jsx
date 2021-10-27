// 1.- Crear un componente padre que tenga un botón que sume 1 a una variable de estado cada vez que se pulse. Además este componente llamará al componente del ejercicio 2  y le pasará por props la variable de estado del padre.
// 2.- Crear un componente que muestre el siguiente texto "Has pulsado x veces el botón.". X será una variable de estado y su valor llegará al componente por props.
// 3.-Crear un componente card (reutilizar la card de ayer) que recibirá por prop una variable que indique si hará flip vertical o horizontal, implementar ambos flips dependientes de esta variable.
// 4.-Crear un componente padre que llamará a la card y tendrá un botón que al pulsar alternará entre vertical u horizontal (dependiente del estado previo) y pasará a su hijo (componente del ejercicio 3) esta variable. El hijo deberá hacer el flip indicado.

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Counter></Counter>
            </React.Fragment>
        )

    }
}
ReactDOM.render(<App />, document.querySelector('.container'));