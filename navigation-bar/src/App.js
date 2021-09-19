import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';

//import About from './pages/about';
/* import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
       <Route path="/" exact component={Home} />
     </Switch>
    </Router>
  );
}

export default App;

