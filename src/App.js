import React from 'react';
// import { BrowserRouter as Router } from  'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/calculator">
            <div className="app">
              <h2>Lets do some Math!</h2>
              <Calculator />
            </div>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
