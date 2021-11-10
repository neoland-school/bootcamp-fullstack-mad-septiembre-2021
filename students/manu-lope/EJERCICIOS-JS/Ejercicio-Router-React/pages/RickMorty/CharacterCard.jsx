class CharacterCard extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="divContainer___style">
                <img className = "divContainer___style--img"src={this.props.image} alt="imagen personaje" />
                <div className="divContainer__style--textdiv">
                    <h1 className="divContainer___style--h1">{this.props.name}</h1>
                        <div className="div__status">
                        {this.props.status==="Alive" ? <div className="verde"></div> : <div className="rojo"></div>}
                        <p>{this.props.status}</p>
                    </div>
                    <p className="divContainer___style--p">Last known location:</p>
                    <p>{this.props.location}</p>
                    <p className="divContainer___style--p">First seen in:</p>
                    <p>{this.props.episode}</p>
                </div>
            </div>
        )
    }
}