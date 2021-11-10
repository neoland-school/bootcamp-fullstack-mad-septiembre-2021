class App extends React.Component {

    render() {
        return (
            <ReactRouterDOM.BrowserRouter>

                <Header></Header>

                <ReactRouterDOM.Switch>
                    <ReactRouterDOM.Route path="/pokemon">
                        <PokemonPage></PokemonPage>
                    </ReactRouterDOM.Route>

                    <ReactRouterDOM.Route path="/RickYMorty">
                        <RickYMorty></RickYMorty>
                    </ReactRouterDOM.Route>

                    <ReactRouterDOM.Route path="/TheLinks">
                        <TheLinks></TheLinks>
                    </ReactRouterDOM.Route>

                    <ReactRouterDOM.Route path="/">
                        <Main></Main>
                    </ReactRouterDOM.Route>

                </ReactRouterDOM.Switch>


                <Footer></Footer>

            </ReactRouterDOM.BrowserRouter>


        )
    }
}



ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);