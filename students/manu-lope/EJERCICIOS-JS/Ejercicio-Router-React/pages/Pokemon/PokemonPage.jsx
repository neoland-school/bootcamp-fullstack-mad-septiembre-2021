class PokemonPage extends React.Component {
    constructor() {
        super();
        this.state = {
            personajes: [],
            component: ""
        }
    }
    async componentDidMount() {

        let random = (Math.floor(Math.random() * 1118)).toString();

        const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
        const data = await r.json();
        const newState = {
            personajes: data
        }

        this.setState(newState);
        this.setState({
            component: <PokemonCardComponent name = {this.state.personajes.forms[0].name}>
                {/* sprite = {this.state.personajes.forms[0].sprites.front_default} */}
                {/* // location={this.state.personajes.location.name}
            // episode={this.state.personajes.episode[0]} */}
            </PokemonCardComponent>
        })
        console.log(data.forms[0]);
    }
    render() {
        return <React.Fragment>
            {this.state.component}
        </React.Fragment>
    }
}