import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import style from './Home.css';


class Home extends Component {
 render() {
    return (
        <section name="Home" className="Home">
          <section className="Home-content">
            <h1>Bienvenido a Condeasi</h1>
            <p>Condeasi te ayuda hacer mas facil tu vida</p>
            <ul>
              <li>
                <img src="../img/For-teachers-flat.png" alt=""/>
                <p>Crear Docente</p>
              </li>
              <li>
                <img src="../img/student.png" alt=""/>
                <p>Crear Estudiante</p>
              </li>
              <li>
                <img src="../img/matery.png" alt=""/>
                <p>Crear Asignatura</p>
              </li>
              <li>
                <img src="../img/edit.png" alt=""/>
                <p>Modificar</p>
              </li>
              <li>
                <img src="../img/reporte.png" alt=""/>
                <p>Reportes</p>
              </li>
              <li>
                <img src="../img/active.png" alt=""/>
                <p>Abrir Asignatura</p>
              </li>
            </ul>
          </section> 
        </section>
    );
  }
}

export default Home;