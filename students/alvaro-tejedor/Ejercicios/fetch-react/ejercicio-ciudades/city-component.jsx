class City extends React.Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className='card'>
                <h1>{this.props.data.city}</h1>
                <p>Población: {this.props.data.poblacion}</p>
            </div>
        )
    }
}