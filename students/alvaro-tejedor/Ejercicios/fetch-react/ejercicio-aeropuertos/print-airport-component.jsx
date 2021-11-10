class PrintAirport extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className='card'>
                    <div className='p-container'>
                        <p>Name: {this.props.data.name}</p>
                    </div>
                    <div className='p-container'>
                        <p>Country: {this.props.data.country}</p>
                    </div>
                    <div className='p-container'>
                        <p>State: {this.props.data.state}</p>
                    </div>
                    <div className='p-container'>
                        <p>City: {this.props.data.city}</p>
                    </div>
                    <div className='p-container'>
                        <p>Lat: {this.props.data.lat}</p>
                    </div>
                    <div className='p-container'>
                        <p>Long: {this.props.data.long}</p>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}