class Header extends React.Component{
    render(){
        return <React.Fragment>
                <header className={'header__container'}>
                    <div className={'header__image__container'}>
                        <img className={'header__image'} src='logo.png'></img>
                    </div>
                    <a className={'header__link'} href='https://www.google.es/'>Link</a>
                </header>
            </React.Fragment>
        }
}
