class Cities_hija_city_List extends React.Component {
   

    constructor(props) { // las props vienen como parámetro de entrada del constructor y es un objeto
        super(props); // le paso las props al padre de la clase (de la herencia, es decir React.Component) en el super 
        
    }


    render() {
        return (
            <div className= 'container_cities_List'>
                {/* estas props las pasará el padre en los atributos de la etiqueta. */}
                <h1>{this.props.nombre}</h1>
                <p>{this.props.nombre} tiene {this.props.habitantes} habitantes</p>
               
            </div>
        )
    }
}