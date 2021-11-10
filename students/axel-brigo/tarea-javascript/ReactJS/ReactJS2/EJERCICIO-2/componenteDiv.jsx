class DivComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            color: 'divRojo'
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={`block ${this.state.color`}}>rojo</div>
                <button>Change color</button>
            </React.Fragment >
        )
    }


}