function Header(){
    return(
        <header className='header__container'>
            <nav className='nav__container'>
                <ul>
                    <li><ReactRouterDOM.Link to="/page1">Register</ReactRouterDOM.Link></li>
                    <li><ReactRouterDOM.Link to="/page2">Login</ReactRouterDOM.Link></li>
                    <li><ReactRouterDOM.Link to="/home">Home</ReactRouterDOM.Link></li>
                </ul>
            </nav>
        </header>
    )
}