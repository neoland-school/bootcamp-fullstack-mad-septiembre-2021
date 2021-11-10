class Header extends React.Component {

    render() {
        return (
            <header className="header__div">
                <nav>
                    <ul>
                        <li><ReactRouterDOM.Link to="/pokemon">Ir a la card de pokemon</ReactRouterDOM.Link></li>
                        <li><ReactRouterDOM.Link to="/RickYMorty">Ir a la pagina de Rick Y Morty</ReactRouterDOM.Link></li>
                        <li><ReactRouterDOM.Link to="/TheLinks">Ir a la pagina que tiene 3 links</ReactRouterDOM.Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}