class App extends React.Component {

    render() {
        return (
            <ReactRouterDOM.BrowserRouter>
                <Header></Header>
                <main className='main__container'>
                <ReactRouterDOM.Switch>
                    <ReactRouterDOM.Route path='/page1'>
                    <PokemonList></PokemonList>
                    </ReactRouterDOM.Route>

                    <ReactRouterDOM.Route path='/page2'>
                    <ListCharacters></ListCharacters>
                    </ReactRouterDOM.Route>

                    <ReactRouterDOM.Route path='/page3'>
                    <Navigation></Navigation>
                    </ReactRouterDOM.Route>
                </ReactRouterDOM.Switch>
                </main>
                <Footer></Footer>
            </ReactRouterDOM.BrowserRouter>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);