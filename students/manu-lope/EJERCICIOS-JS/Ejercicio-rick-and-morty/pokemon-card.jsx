class PokemonCardComponent extends React.Component {


    constructor(props) {
        super(props);
        console.log('Me construyo');
        this.state = {
            pokemon: {
                sprites: {}
            }
        };
    }

    async componentDidMount() {
        console.log('Terminando de montar el componente');
        const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`);
        const pokemon = await r.json();
        this.setState({ pokemon });
    }

    render() {
        console.log('Me pinto')
        return (
            <div>
                <p>{this.state.pokemon.name}</p>
                <img src={this.state.pokemon.sprites.front_default}></img>
            </div>
        )
    }
}

class App extends React.Component{

    render(){
        return (
            <React.Fragment>
                {Array(150).fill(null).map((_, i) => <PokemonCardComponent id={i+1}></PokemonCardComponent>)}
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
