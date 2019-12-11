import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </Router>

  );
}

const Home = () => (
  <div> HOME </div>
);

export default App;
