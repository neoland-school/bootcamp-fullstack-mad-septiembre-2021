// 4. Crear un componente que pinte 7 cards del componente del 3. Cambiarlo ahora para que pinte 1000.

class SevenCards extends React.Component {
    render() {
        return (
         <React.Fragment>
            {
                Array(1000).fill(0).map((e, i) => <Card key={i}/>)
            }
        </React.Fragment>
        )
    }
}