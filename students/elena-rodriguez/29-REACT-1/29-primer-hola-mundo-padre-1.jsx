// 1. Hola Mundo ReactJS y JSX. Crear un componente react utilizando JSX y devolver un H    


    //creamos con una clase la app que la tome como herencia de React para que cargue el componente
      class App extends React.Component{
       
        // el método render siempre tiene que tener un return
        render(){
          return  ( 
        //   retorna la llamada de otro componente SoyElComponenteHolaMundo       
         <SoyElComponenteHolaMundo></SoyElComponenteHolaMundo>
         )
        }
      } 
      // ReactDOM es otra clase que en su método render selecciona el div en el que se meterá el JSX que está en el HTML
      ReactDOM.render(
        <App/>,
        document.getElementById('react-container-jsx')
      );