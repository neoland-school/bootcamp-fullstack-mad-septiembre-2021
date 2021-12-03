// 1.- Crear un componente padre que tenga un botón que sume 1 a una variable de estado cada vez que se pulse. Además este componente llamará al componente del ejercicio 2  y le pasará por props la variable de estado del padre.
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter:0,
            rotate: 'backA'
        }
    }

    addOne() {
        this.setState(oldState => {
            let contador = oldState.counter + 1;
            console.log(contador);
            return {
                counter : contador
            }
        })
    }
    rotateCard() {
        this.setState(oldState => {
            return {
                rotate: oldState.rotate === 'backA' ? 'backB' : 'backA'
            }
    })
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.addOne()}>Pulsame</button>
                <CounterChild contador = {this.state.counter} ></CounterChild>
                <button onClick={() => this.rotateCard()}>Pulsame</button>
                <Card position={this.state.rotate}></Card>
            </React.Fragment>
        )
    }
}
