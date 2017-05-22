import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import style from './Docente.css';


class Docente extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido:'', 
      tipodoc: '', 
      numdoc: '', 
      codigo: '', 
      usuario: '', 
      clave: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
   }

 handleClick(e) {    
    console.log(JSON.stringify(this.state));
     fetch('http://localhost:1111/docente', {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(this.state)
        })
      .then((response) => {
        return response.json()
      })
      .then((usuario) => {
        console.log(usuario);
        
      })
    e.preventDefault();
  }

  onChange(e) {
      var state = {};
      state[e.target.name] =  e.target.value;
      this.setState(state);
  }

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
                <form onSubmit={this.handleClick}>
                  <fieldset>
                    <label>Nombre: </label>
                    <input type="text" onChange={this.onChange} value={this.state.nombre} required  name="nombre"/>
                    <label>Apellido: </label>
                    <input type="text" onChange={this.onChange} value={this.state.apellido} required  name="apellido" />
                    <label>Identificacion: </label>
                    <div className="Docente-content-form-id">
                      <select onChange={this.onChange} value={this.state.tipodoc} required  name="tipodoc">
                        <option value="">.:Sel:.</option>
                        <option value="CC">CC</option>
                        <option value="CE">CE</option>
                      </select>
                      <input type="text" onChange={this.onChange} value={this.state.numdoc} required  name="numdoc"/>
                    </div>
                    <label>Codigo: </label>
                    <input type="text" onChange={this.onChange} value={this.state.codigo} required  name="codigo" />
                    <label>Usuario: </label>
                    <input type="text" onChange={this.onChange} value={this.state.usuario} required  name="usuario" />
                    <label>Clave: </label>
                    <input type="password" onChange={this.onChange} value={this.state.clave} required  name="clave" />
                    <input type="submit" value="Guardar" />
                  </fieldset>
                </form>
            </div>
          </section>
        </section>
    );
  }
}

export default Docente;