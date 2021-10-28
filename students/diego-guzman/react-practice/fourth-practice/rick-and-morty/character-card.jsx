class CharacterCard extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return <React.Fragment>
            <div className= 'character__container'>
                <img src={this.props.data.image} className='character__img'></img>
                <p className='character__name'>{this.props.data.name}</p>
                <p className='character__status'>{this.props.data.status}</p>
                <p className='character__location'>Last known location: {this.props.data.status}</p>
                <p className='character__episodio'>First seen in:{this.props.data.episode[0]} </p>
            </div>
        </React.Fragment>
    }

}