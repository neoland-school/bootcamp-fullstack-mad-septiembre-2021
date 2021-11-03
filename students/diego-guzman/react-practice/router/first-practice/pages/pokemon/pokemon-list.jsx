class PokemonList extends React.Component {
    constructor() {
        super()
        
        this.state = {
            pokemon:{
                sprites:{
                    versions:{
                        ["generation-v"]:{
                            ["black-white"]:{
                                animated:{}
                        }
                    }
                }
                }
            }
        }
    }

    async componentDidMount() {
        const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (151 - 1)) + 1}/`)
        const d = await r.json();
        this.setState({pokemon: d});
    }

    render() {
        return (
             <PokemonCard pokemon={this.state.pokemon}></PokemonCard>
        )
    
    }

}