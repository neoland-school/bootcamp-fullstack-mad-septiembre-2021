class PokemonCardComponent extends React.Component {

constructor(props){
    super(props)
}


render(){
    return (
            <div>
                <p>{this.props.name}</p>
                <img src={this.props.sprite}></img>
            </div>
)
}

}