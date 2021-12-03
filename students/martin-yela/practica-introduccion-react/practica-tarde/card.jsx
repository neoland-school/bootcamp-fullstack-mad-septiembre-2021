// 3. Crear un componente que tenga esta card que pinte la card que se mjuestra en la imagen (podeis sacar las imagenes de la card de pexels) y pintarla.

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  <div>
                <div className={`card_container ` + this.props.position}>
                    <img className='image_card' src='https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440'></img>
                    <div className='text_card'>
                        <p>Río</p>
                        <p className='sentence_card'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cumque fugiat minus quae, optio, quasi repudiandae obcaecati quas quam ratione esse iure voluptatibus excepturi necessitatibus corrupti minima dicta reiciendis tempore?</p>
                        <div className='tag_container'>
                            <div className='tag'>
                                <p>#Photography</p>
                            </div>
                            <div className='tag'>
                                <p>#Travel</p>
                            </div>
                            <div className='tag'>
                                <p>#Winter</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    }
}