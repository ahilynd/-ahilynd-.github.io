import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import ChangeLog from './pages/change log';
import Contact from './pages/contact';
import Movies from './pages/movies';
import MyRepository from './pages/my repository';
import Resources from './pages/resources';
import ToDoLists from './pages/todo list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/' exact component={ChangeLog} />
        <Route path='/' exact component={Contact} />
        <Route path='/' exact component={Movies} />
        <Route path='/' exact component={MyRepository} />
        <Route path='/' exact component={Resources} />
        <Route path='/' exact component={ToDoLists} />
      </Switch>
    </Router>
  );
}
export default App;
