import { Link } from 'react-router-dom';
import './style.css'

function HomeLink(){


    return(
        <Link className='link-to__home' to={'/'}>
        <p>To home</p>
        </Link>
    )
}

export default HomeLink;