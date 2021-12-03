// 2- Crear un componente de función llamado Greeting, que reciba por props el nombre al que hay que saludo y pinte un p diciendo Hello, y el nombre de las props

function Greeting(props) {
    return <p>Hello {props.name}</p>
}