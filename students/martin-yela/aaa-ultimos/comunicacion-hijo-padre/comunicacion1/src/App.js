import { useState, Fragment} from 'react';
import './App.css';
import CalculadoraTemp from './component/calculadora-temp/calculadora';
import Header from './component/header/header';
import Main from './component/main/main';
import Footer from './component/footer/footer';
import { LangContext } from './prueba/contexto-variable.js';

function App() {
  const [language, setLanguage] = useState('es');

  const changeLanguage = (e) => {
        setLanguage(e.target.value);
  }

  return (
    <Fragment>
      <LangContext.Provider value={language}>
        <Header onChangeLanguage= {changeLanguage}></Header>
        <CalculadoraTemp></CalculadoraTemp>
        <Main ></Main>
        <Footer ></Footer>
      </LangContext.Provider>
      
    </Fragment>
  );
}

export default App;
