

import {BrowserRouter, Switch, Route } from 'react-router-dom'
import CharacterList from './pages/character-list/index.jsx'
import './App.css';
import React from 'react';
import Character from './pages/characters';
import Header from './components/Header'
import Footer from './components/footer'


function App() { 
  return (
    <React.Fragment>
       <Header></Header>
          <BrowserRouter>
      
              <Switch>
                  <Route exact path='/character/:id'>
                      <Character></Character>
                  </Route>

                  <Route exact path='/character-list'>
                      <CharacterList></CharacterList>
                  </Route>
              </Switch>
          </BrowserRouter>
      <Footer></Footer>
    </React.Fragment>
  )
};

export default App;


