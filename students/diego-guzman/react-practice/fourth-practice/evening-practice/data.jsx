class CityData extends React.Component {

    constructor(props) {
        super(props)
        }

    render() {
        return <React.Fragment>
            <div className='city__container'>
                <h1>{this.props.data.city}</h1>
                <p>{this.props.data.population}</p>
            </div>
        </React.Fragment>
    }
}