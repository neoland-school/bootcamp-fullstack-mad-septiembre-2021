import { Link } from "react-router-dom"

function Header(){


    return (
        <header>
            <nav>
                <Link to='/'><li>To home</li></Link>
                <Link to='/login-page'><li>To login</li></Link>
                <Link to='/private'><li>To Private Area</li></Link>
            </nav>
        </header>
    )
}

export default Header