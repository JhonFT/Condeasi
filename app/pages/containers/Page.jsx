import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Header from '../header/Header.jsx';
import Login from '../login/Login.jsx';
import Home from '../home/Home.jsx';
import Error404 from './Error404.jsx';


const Pages = () => (
  <Router>
    <div>  
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Homes}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
)


const Homes = () =>{
  return (<div>
    <Header />
    <Home />
  </div>)
}
const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)


export default Pages;