// 3.-Crear un componente card (reutilizar la card de ayer) 
// que recibirá por prop una variable que indique si hará flip vertical o horizontal, implementar ambos flips dependientes de esta variable.

class Card extends React.Component {

    constructor(props) {
        super(props)
    
    }

    render() {
        return <React.Fragment>
            <div className={`div__container ` + this.props.flip} >
                <img src={'fishing.jpeg'} className={'card__img'}></img>
                <div className={'text__container'}>
                    <h2 className={'card__tittle'}>Fishing</h2>
                    <p className={'card__text'}>Fishing is one of the best hobbies to practice. It relaxes the mind while being in the nature. Grab your rod and lures and find a creek! Tight lines!</p>
                    <div className={'hastag__container'}>
                        <div className={"hastag__individual__container"}>
                            <p className={"hastag__item"}>#Fishing</p>
                        </div>
                        <div className={"hastag__individual__container"}>
                            <p className={"hastag__item"}>#Outdoors</p>
                        </div>
                        <div className={"hastag__individual__container"}>
                            <p className={"hastag__item"}>#River</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}