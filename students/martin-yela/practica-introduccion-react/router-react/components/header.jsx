class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li><ReactRouterDOM.Link to="/pokemonCard">Pokemon Card</ReactRouterDOM.Link></li>
                        <li><ReactRouterDOM.Link to="/rickMortyCard">Rick & Morthy Card</ReactRouterDOM.Link></li>
                        <li><ReactRouterDOM.Link to="/links"> Menu </ReactRouterDOM.Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}