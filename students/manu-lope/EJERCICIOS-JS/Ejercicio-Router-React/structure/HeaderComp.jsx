class HeaderComp extends React.Component {

    render() {
        return (
            <header className="header__style">
                <nav className="header__style--nav">
                    <ul className="header__style--nav--ul">
                        <li><ReactRouterDOM.Link to="/Rick-and-Morty">Rick and Morty</ReactRouterDOM.Link></li>
                        <li><ReactRouterDOM.Link to="/Pokemon">Pokemon</ReactRouterDOM.Link></li>
                        <li><ReactRouterDOM.Link to="/Links">Navigate</ReactRouterDOM.Link></li>
                        <li><ReactRouterDOM.Link to="/">MAIN</ReactRouterDOM.Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
