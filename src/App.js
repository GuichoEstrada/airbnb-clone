import React from 'react';
import './App.scss';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import SearchPage from './pages/Search/Search'
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (

    // BEM
    <div className="app">

      <Router>
        <Header />

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/search'><SearchPage /></Route>
        </Switch>

        <Footer />
      </Router>
        
    </div>
  );
}

export default App;
