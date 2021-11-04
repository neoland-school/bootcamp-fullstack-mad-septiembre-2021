// 1.- Crear un componente “CharacterCard” que mostrará
// nombre
// estado (vivo o muerto)
// Ultima localización conocida
// Nonbre del primer episodio en que aparece.

class CharacterCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='card'>
                <div className='img_container'><img src={this.props.datos.image} alt="" /></div>
                <div>
                    <h1>{this.props.datos.name}</h1>
                    {this.props.datos.status === 'Alive'?
                        <img className='punto' src="https://key0.cc/images/small/3571_01b29fae4fcb372cf7165986aea77ac1.png"/>
                        : <img className='punto' src="http://assets.stickpng.com/images/58afdad6829958a978a4a693.png"/>}
                    <p>{this.props.datos.status}</p>
                    <p>{this.props.datos.location.name}</p>
                    
                </div>
            </div>
        )
    }
}