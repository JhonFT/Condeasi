import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from '../header/Header.jsx';
import Home from '../home/Home.jsx';
import Error404 from './Error404.jsx';




const Pages = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={Error404}/>
    </div>
  </Router>
)

export default Pages;