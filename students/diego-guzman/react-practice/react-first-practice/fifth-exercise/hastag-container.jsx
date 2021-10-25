class HastagContainer extends React.Component {
    render() {
        return <React.Fragment>
            <div className={'hastag__container'}>
                <div className={"hastag__individual__container"}>
                    <p className={"hastag__item"}>#Fishing</p>
                </div>
                <div className={"hastag__individual__container"}>
                    <p className={"hastag__item"}>#Outdoors</p>
                </div>
                <div className={"hastag__individual__container"}>
                    <p className={"hastag__item"}>#River</p>
                </div>
            </div>
        </React.Fragment>
    }
}
