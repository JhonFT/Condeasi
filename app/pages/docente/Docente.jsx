import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import style from './Docente.css';


class Docente extends Component {
 render() {
    return (
        <section name="Docente" className="Docente">
          <h1>Crear Docente</h1>
          <section className="Docente-content">
            <figure className="Docente-content-img">
              <img src="../img/Dslr-Camera-icon.png" alt="" />
              <button>Cambiar</button>
            </figure>
            <div className="Docente-content-form">
                <from>
                  <fieldset>
                    <label>Nombre: </label>
                    <input type="text" />
                    <label>Apellido: </label>
                    <input type="text" />
                    <label>Identificacion: </label>
                    <div className="Docente-content-form-id">
                      <select>
                        <option>.:Sel:.</option>
                        <option value="1">CC</option>
                        <option value="2">CE</option>
                      </select>
                      <input type="text" />
                    </div>
                    <label>Codigo: </label>
                    <input type="text" />
                    <label>Usuario: </label>
                    <input type="text" />
                    <label>Clave: </label>
                    <input type="text" />
                    <input type="submit" value="Guardar" />
                  </fieldset>
                </from>
            </div>
          </section>
        </section>
    );
  }
}

export default Docente;