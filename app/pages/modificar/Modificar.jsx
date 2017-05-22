import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import style from './Modificar.css';


class Modificar extends Component {
 render() {
    return (
        <section name="Modificar" className="Modificar">
          <h1>Modificar</h1>
          <div>
            <select name="" id="">
              <option value="">Estudiantes</option>
              <option value="">Docentes</option>
            </select>
          </div>
          <section className="Modificar-content">
            <figure className="Modificar-content-img">
              <img src="../img/Dslr-Camera-icon.png" alt="" />
              <button>Cambiar</button>
            </figure>
            <div className="Modificar-content-form">
                <from>
                  <fieldset>
                    <label>Nombre: </label>
                    <input type="text" />
                    <label>Apellido: </label>
                    <input type="text" />
                    <label>Identificacion: </label>
                    <div className="Modificar-content-form-id">
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

export default Modificar;