import { Link } from 'react-router-dom';
import './style.css'
import { BrowserRouter } from 'react-router-dom';

function Header() {



    return (
        <BrowserRouter>
            <Link to='/character/2'>Link a Character</Link>
        </BrowserRouter>
    )
}


export default Header;