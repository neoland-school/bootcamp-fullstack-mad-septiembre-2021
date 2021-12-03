class Header extends React.Component {


    render() {
        return (
            <header className='header__container'>
                <nav className='nav__container'>
                    <ul>
                        <li><ReactRouterDOM.Link to="/page1">First Page</ReactRouterDOM.Link></li>
                        <li><ReactRouterDOM.Link to="/page2">Second Page</ReactRouterDOM.Link></li>
                        <li><ReactRouterDOM.Link to="/page3">Third Page</ReactRouterDOM.Link></li>
                    </ul>
                </nav>
            </header>
        )
    }

}



