class PokemonPage extends React.Component {
    constructor() {
        super();
        this.state = {
            personajes: []
        }
    }
    async componentDidMount() {

        let random = (Math.floor(Math.random()*1118)).toString();

        const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
        const data = await r.json();
        const newState ={
            personajes: data
        }
        this.setState(newState);
    }
    render() {
        return  <React.Fragment>
                    <PokemonCardComponent>
                        name={this.state.personajes.results.name}
                        sprite={this.state.personajes.results.url.sprites.front_default}
                        {/* // location={this.state.personajes.location.name}
                        // episode={this.state.personajes.episode[0]} */}
                    </PokemonCardComponent>
            </React.Fragment>
    }
}