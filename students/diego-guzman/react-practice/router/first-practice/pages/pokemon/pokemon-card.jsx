class PokemonCard extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='pokemon__container'>
                <img src={this.props.pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} className='pokemon__img'></img>
                <div className='pokemon__text__container'>
                    <h2 className='pokemon__name'>{this.props.pokemon.name}</h2>
                    <p className='pokemon__id'>{this.props.pokemon.id}</p>
                </div>
            </div>
        )
    }

}


