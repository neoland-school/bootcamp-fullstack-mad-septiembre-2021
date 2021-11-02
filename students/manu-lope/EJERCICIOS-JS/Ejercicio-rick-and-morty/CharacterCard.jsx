class CharacterCard extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.status}</p>
                <p>{this.props.location.name}</p>
                <p>{this.props.episode[0]}</p>
            </div>
        )
    }
}