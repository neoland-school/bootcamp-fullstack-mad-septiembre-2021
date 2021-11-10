class AeropComponent extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="div__container">
                <p>{this.props.name}</p>
                <p>{this.props.country}</p>
                <p>{this.props.state}</p>
                <p>{this.props.city}</p>
                <p>{this.props.lat}</p>
                <p>{this.props.long}</p>
            </div>
        )
    }
}






