import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Header from '../header/Header.jsx';
import Login from '../login/Login.jsx';
import Home from '../home/Home.jsx';
import Docente from '../docente/Docente.jsx';
import Estudiante from '../estudiante/Estudiante.jsx';
import Error404 from './Error404.jsx';
import Asignatura from '../asignatura/Asignatura.jsx';
import Modificar from '../modificar/Modificar.jsx';
import Abrir from '../abrir/Abrir.jsx';
import Asistencia from '../asistencia/Asistencia.jsx';


class Pages extends Component {

 render() {
    if(isLogged()){ 
    return (
      <Router>
      <div>  
        <Switch>
            <Route path="/home" component={Homes} />
            <Route path="/docente" component={createDocente}/>
            <Route path="/estudiante" component={createEstidiante}/>
            <Route path="/asignatura" component={asignatura}/>
            <Route path="/modificar" component={modificar}/>
            <Route path="/abrir" component={abrir}/>
            <Route path="/asistencia" component={asistencia}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
    );
    }else{
     return (
      <Router>
      <div>  
        <Switch>
          <Route path="/" exact component={Login} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
    );
   }
  }
}

let isLogged = () => {
  return true;
}
const Homes = () =>{
  return (<div>
    <Header />
    <Home />
  </div>)
}

const abrir = () =>{
  return (<div>
    <Header />
    <Abrir />
  </div>)
}
const asistencia = () =>{
  return (<div>
    <Header />
    <Asistencia />
  </div>)
}


const asignatura = () =>{
  return (<div>
    <Header />
    <Asignatura />
  </div>)
}
const modificar = () =>{
  return (<div>
    <Header />
    <Modificar />
  </div>)
}

const createDocente = () =>{
  return (<div>
    <Header />
    <Docente />
  </div>)

}
const createEstidiante = () =>{
  return (<div>
    <Header />
    <Estudiante />
  </div>)
}
const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)


export default Pages;