// 1- Hacer un componente que tenga un div de 100px por 100px de color rojo, y un botón. 
// Cuando se pulse el botón, elcolor de fondo del div cambiará a verde

class SquareDOM extends React.Component{

    constructor() {
        super();
        this.colorRotation = ['green','red', 'yellow','blue'],
            this.state = {
                color: this.colorRotation[0],
                currentColorPosition: 0
            }
    }
    
    updateColor() {
        this.setState(oldState => {
            const nextPosition = (oldState.currentColorPosition + 1) % this.colorRotation.length;
            return {
                color: this.colorRotation[nextPosition],
                currentColorPosition: nextPosition
            };
        })
    }

    render(){
        return <React.Fragment>
        <div className={this.state.color}></div>
        <button onClick={() => this.updateColor()}>Press me</button>
        </React.Fragment>
        
    }
}


