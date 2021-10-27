class PdomSibling extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <React.Fragment>
            <p>You have clicked: {this.props.counter}</p>
        </React.Fragment>
    }


}