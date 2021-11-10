class PokemonCardComponent extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return <React.Fragment>
            <p>{this.props.name}</p>
        </React.Fragment>
    }
}