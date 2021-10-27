
class Pdom extends React.Component {

    constructor() {
        super()
        this.state = {
            counter: 0,
            flip: 'vertical',
        }
    }

    updateCounter() {
        this.setState(oldState => {
            return {
                counter: oldState.counter + 1,
            }
        })
    }
    updateRotation() {
      this.setState(oldState=>{
          return{ flip: oldState.flip=== 'vertical' ? 'horizontal':'vertical'
          }
      })

    }
    render() {
        return <React.Fragment>
            <p>the counter is:{this.state.counter}</p>
            <p>the rotation is:{this.state.flip}</p>
            <button className='button' onClick={() => {this.updateCounter(); this.updateRotation()}}>click me!</button>
            <PdomSibling counter={this.state.counter}></PdomSibling>
            <Card flip={this.state.flip}></Card>
        </React.Fragment>
    }
}