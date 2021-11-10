// 1.- Crear una web usando react que tenga un header, una sección central y un footer.
// 2.- Colocar en el header 3 links que deberán redirigir a las siguientes páginas (haciendo uso de react router)
// La primera página mostrará un card de pokemon centrado, el pokemon que aparezca será aleatorio y si volvemos a la página principal y volvemos a ir al link de pokemon saldrá otro pokemon tb de forma aleatoria.
// La segunda página será igual que la anterior pero mostrará un card de un personaje de rick y morty. De nuevo el personaje será aleatorio y cambiará cada vez que accedamos a la página.
// La tercera página tendrá 3 links. 1 irá a la página de pokemon, otro a la de rick y morty y el último volverá a la página principal


class App extends React.Component {


    render() {
        return (
            <ReactRouterDOM.BrowserRouter>

                <HeaderComp></HeaderComp>

                <ReactRouterDOM.Switch>

                    <ReactRouterDOM.Route path="/Rick-and-Morty">
                        <RickMortyPage></RickMortyPage>
                    </ReactRouterDOM.Route>

                    <ReactRouterDOM.Route path="/Pokemon">
                        <PokemonPage></PokemonPage>
                    </ReactRouterDOM.Route>

                    <ReactRouterDOM.Route path="/Links">
                        <LinksComp></LinksComp>
                    </ReactRouterDOM.Route>

                    <ReactRouterDOM.Route path="/">
                        <MainComp></MainComp>
                    </ReactRouterDOM.Route>

                </ReactRouterDOM.Switch>

                <FooterComp></FooterComp>

            </ReactRouterDOM.BrowserRouter>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('react-root')
);