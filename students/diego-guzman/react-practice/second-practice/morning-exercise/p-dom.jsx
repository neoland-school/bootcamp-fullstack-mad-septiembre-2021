
class Pdom extends React.Component{

    constructor(){ 
        super(); 
        this.state = {
            message: 'Hello'
        }
    }

    updateText(){
        this.setState(oldState=>{
            return{
                message: oldState.message.toLowerCase() === 'hello' ? 'Goobye' : 'Hello'
            }
        });
    }

    render(){
        return <React.Fragment>
        <p>{this.state.message}</p>
        <button onClick={() => this.updateText()}>Press me</button>
        </React.Fragment>
        
    }
}


    // // this.state.message ==='Hello' ? {message:'Goodbye'} : {message: 'Hello'}))}>Press me</button>
    // {message: this.state.message ==='Hello' ? 'Goodbye' : 'Hello'}))}

   
