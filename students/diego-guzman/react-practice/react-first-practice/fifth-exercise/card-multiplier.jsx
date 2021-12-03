// 3.Crear un componente que tenga esta card que pinte la card que se mjuestra en la imagen (podeis sacar las imagenes de la card de pexels) y pintarla.


class ThousandCards extends React.Component{
    render(){
        return <React.Fragment>
                {
                    Array(1000).fill(0).map((e, i)=> <Container></Container>)
                }
            </React.Fragment>
        }
}
