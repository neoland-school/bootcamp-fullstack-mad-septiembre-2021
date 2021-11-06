import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import CharacterList from './pages/character-list-page';
import CharacterDetail from './components/character-detail';
import Home from './pages/home';
import Header from './components/header/'
import LinkHome from './components/go-to-home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/characterlist'>
            <Header></Header>
            <CharacterList></CharacterList>
            <LinkHome></LinkHome>
          </Route>
          <Route exact path='/character/:id'>
            <Header></Header>
            <CharacterDetail></CharacterDetail>
            <LinkHome></LinkHome>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;
