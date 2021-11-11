import './App.css';
import Calculator from './components/calculadora';
import Header from './components/header/'
import {LangContext} from './language-context.js'
import { useState } from 'react';

function App() {

  let [lang, updateLang] = useState('es')

  const languageToggle = e=>{
    let info = e.target.value;
    console.log(info)
    updateLang(info)
}


  return (
    <div className="App">
      <LangContext.Provider value={lang}>
        <Header onLanguageChange={languageToggle}></Header>
      </LangContext.Provider>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
