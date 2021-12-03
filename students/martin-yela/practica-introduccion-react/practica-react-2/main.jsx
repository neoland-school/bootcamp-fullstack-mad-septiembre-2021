let counter = 1;

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <div className='main'>
                {Array(counter).fill(0).map((e) => <Card></Card>)}
                </div>
                <Footer></Footer>
                
            </React.Fragment>
           ) 
    }
}

ReactDOM.render(<App />, document.querySelector('.header_container'));

document.querySelector('.button').addEventListener('click', ()=> {
    counter++;
    ReactDOM.render(<App />, document.querySelector('.header_container'));
})