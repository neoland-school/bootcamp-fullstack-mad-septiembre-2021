class CityList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            
            <div className="div__style">
            <h1>{this.props.nombre}</h1>
            <p>Es la mejor ciudad pero tiene {this.props.poblacion} de habitantes, y eso es demasiada gente. </p>
        </div>
    )
        
    }
}