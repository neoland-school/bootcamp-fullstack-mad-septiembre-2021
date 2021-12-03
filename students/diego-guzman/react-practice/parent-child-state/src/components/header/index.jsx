import React from 'react'
import { useContext } from 'react';
import { LangContext } from '../../language-context.js'
import HeaderEsp from './header-esp/index.jsx';
import HeaderEng from './header-eng/index.jsx';
import HeaderDeu from './header-deu/index.jsx';


export default Header;
function Header(props) {

    const language = useContext(LangContext)

    
    let saludo = '';

    if(language==='es'){
        saludo = <HeaderEsp></HeaderEsp>
    }
    if (language==='en'){
        saludo = <HeaderEng></HeaderEng>
        }
    if (language ==='deu'){
        saludo = <HeaderDeu></HeaderDeu>}

    return (<React.Fragment>
        <header>
            {saludo}
        </header >
        <select onChange={props.onLanguageChange}>
            <option value='es'>Español</option>
            <option value='en'>English</option>
            <option value='deu'>Deutsch</option>
        </select>
    </React.Fragment >
    )
}

