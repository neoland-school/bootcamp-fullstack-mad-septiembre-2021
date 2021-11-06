
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import CharacterListPage from './pages/character-list/index'
import CharacterDetailPage from './pages/character-detail';
import HomePage from './pages/home/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>



        <Switch>
          <Route path='/Characterlist'>
            <CharacterListPage></CharacterListPage>
          </Route>
          <Route path='/Character/:id'>
          <CharacterDetailPage></CharacterDetailPage>
          </Route>
          <Route path='/'>
           <HomePage></HomePage>
           </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
