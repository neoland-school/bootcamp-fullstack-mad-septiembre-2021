class CardComponent extends React.Component {

    constructor(props) {

        super(props)
    }

    render() {
        return (
            <div className={"div_card " + this.props.raulsito}>
                <img className="div_img" src="./assets/mountain.jpg" alt="" />
                <h2>Mountain</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati enim explicabo atque recusandae. Ad error temporibus obcaecati corrupti,
                    accusamus nemo?</p>
                <div className="container_tags">
                    <div className="tags">#Photography</div>
                    <div className="tags">#Travel</div>
                    <div className="tags">#Winter</div>
                </div>
            </div >
        )
    }


}
