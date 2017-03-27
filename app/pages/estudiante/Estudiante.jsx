import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import style from './Estudiante.css';


class Estudiante extends Component {
 render() {
    return (
        <section name="Estudiante" className="Estudiante">
          <h1>Crear Estudiante</h1>
          <section className="Estudiante-content">
            <figure className="Estudiante-content-img">
              <img src="../img/Dslr-Camera-icon.png" alt="" />
              <button>Cambiar</button>
            </figure>
            <div className="Estudiante-content-form">
                <from>
                  <fieldset>
                    <label>Nombre: </label>
                    <input type="text" />
                    <label>Apellido: </label>
                    <input type="text" />
                    <label>Identificacion: </label>
                    <div className="Estudiante-content-form-id">
                      <select>
                        <option>.:Sel:.</option>
                        <option value="1">CC</option>
                        <option value="2">CE</option>
                      </select>
                      <input type="text" />
                    </div>
                    <label>Codigo: </label>
                    <input type="text" />
                    <label>Telefono: </label>
                    <input type="text" />
                    <label>Correo: </label>
                    <input type="email" />
                    <input type="submit" value="Guardar" />
                  </fieldset>
                </from>
            </div>
          </section>
        </section>
    );
  }
}

export default Estudiante;