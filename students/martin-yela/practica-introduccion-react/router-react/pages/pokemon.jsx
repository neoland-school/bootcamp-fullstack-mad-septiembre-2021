class Pokemon extends React.Component{
    constructor(){
        super();
        this.state = {
            pokemon : {
                sprites : {},
            }
            
        }
    }
    async componentDidMount(){
        const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (150 - 1) + 1)}`);
        const pokemon = await r.json();
        this.setState({pokemon});
    }
    render(){
        return (
            <React.Fragment>
                <CardPokemon pokemon={this.state.pokemon}></CardPokemon>
            </React.Fragment>
        )
    }
}