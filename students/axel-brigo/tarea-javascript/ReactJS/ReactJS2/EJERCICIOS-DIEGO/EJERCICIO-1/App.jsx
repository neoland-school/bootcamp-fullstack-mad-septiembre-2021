class App extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
            flip: 'flip_vertical'
        }
    }


    render() {
        return (
            <React.Fragment>
                <p>El valor actual del contador es: {this.state.counter}</p>
                <button onClick={() => this.setState(oldState => ({ counter: oldState.counter + 1 }))}>+</button>
                <ChildComponente pepito={this.state.counter}></ChildComponente>
                <CardComponent raulsito={this.state.flip}></CardComponent>
                <button onClick={() => this.setState(oldState => ({ flip: this.state.flip }))}>FLIP</button>
            </React.Fragment>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('main__react')
);