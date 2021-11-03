class RickMortyCard extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <React.Fragment>
            <div className='character__container'>
                <img src={this.props.data.image} className='character__img'></img>
                <div className='character__text__container'>
                    <h2 className='character__name'>{this.props.data.name}</h2>
                    <span className={`character__status ` + this.props.data.status}>{this.props.data.status}</span>
                    <ul>
                        <li className='character__origin-location'> Origin location-{this.props.data.origin.name}</li>
                        <li className='character__location__tittle'>Last known location:</li>
                        <li className='character__location'>{this.props.data.location.name}</li>
                        <li className='character__episodio__tittle'>First seen in:</li>
                        <li className='character__episodio'>{this.props.episodeName.name}</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    }

}