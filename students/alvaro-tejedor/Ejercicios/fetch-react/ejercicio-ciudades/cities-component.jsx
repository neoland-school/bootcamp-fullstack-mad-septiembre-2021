class Cities extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <React.Fragment>
                <div>
                <h1>{this.props.data.city}</h1>
                <p></p>
                </div>
            </React.Fragment>
        )
    }
}