class AirportCard extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className={`airport__container ` + this.props.airport.code}>
                    <p>{this.props.airport.name}</p>
                    <p>{this.props.airport.country}</p>
                    <p>{this.props.airport.state}</p>
                    <p>{this.props.airport.city}</p>
                    <p>{this.props.airport.lat}</p>
                    <p>{this.props.airport.long}</p>
                </div>
            </React.Fragment>
        )
    }
}