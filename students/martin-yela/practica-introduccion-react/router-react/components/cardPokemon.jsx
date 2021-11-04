class CardPokemon extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='cardPokemon'>
                <img className='imgPokemon' src={this.props.pokemon.sprites.front_default} />
                <p>{this.props.pokemon.id}</p>
                <p>{this.props.pokemon.name}</p>
            </div>
        )
    }
}