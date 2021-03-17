import React from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router> 
      <Switch>   
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
