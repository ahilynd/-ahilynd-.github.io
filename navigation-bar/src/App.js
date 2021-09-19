import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
/* import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import ChangeLog from './pages/change log';
import Contact from './pages/contact';
import Movies from './pages/movies';
import MyRepository from './pages/my repository';
import Resources from './pages/resources';
import ToDoLists from './pages/todo list';
*/

function App() {
  return (
    <Router>
     <Navbar />
     <Switch>
       <Route path="/" exact component={About} />
     </Switch>
    </Router>
  );
}

export default App;

