import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import style from './Asignatura.css';


class Asignatura extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      docente: '',
      cupo: '',
      docentes: [],
      estudiantes: [],
      lsEstudiantes: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeCheck = this.onChangeCheck.bind(this);
 }

 handleClick(e) {    
    console.log(JSON.stringify(this.state));
    fetch('http://localhost:1111/asignatura', {
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

  onChangeCheck(e) {
    var event = e.target;
    var estudianteSel = this.state.lsEstudiantes;
    if(event.checked){ 
      estudianteSel = estudianteSel.filter(e =>  e != event.value); 
      estudianteSel.push(event.value);
    }else{
      estudianteSel = estudianteSel.filter(e =>  e != event.value);
    }
    this.setState({ lsEstudiantes: estudianteSel });
  }

  componentWillMount() {  
    fetch('http://localhost:1111/docente')
      .then((response) => {
        return response.json()
      })
      .then((docentes) => {
        this.setState({ docentes: docentes })
    });
    fetch('http://localhost:1111/estudiante')
      .then((response) => {
        return response.json()
      })
      .then((estudiantes) => {
        this.setState({ estudiantes: estudiantes })
    });
  }
  
 render() {
    const jsonDocente = this.state.docentes;
    var docentes = jsonDocente.map((docente) => 
      <option key={docente.cddocente} value={docente.cddocente}>{docente.dsnombre +" "+ docente.dsapellido}</option>
    );
    const jsonEstiduante= this.state.estudiantes;
    var estudiantes = jsonEstiduante.map((estudiante) => 
      <tr key={estudiante.cdestudiante}>
        <td>{estudiante.dsnombre + " " + estudiante.dsapellido}</td>
        <td>{estudiante.dscodigo}</td>
        <td><input value={estudiante.cdestudiante} onChange={this.onChangeCheck} type="checkbox"/></td>
      </tr>
    );

    return (
        <section name="Asignatura" className="Asignatura">
          <h1>Crear Asignatura</h1>
          <form onSubmit={this.handleClick} >
          <section className="Asignatura-content">
            <div className="Asignatura-content-form">
              <div>
                  <label>Nombre: </label>
                  <input 
                    type="text" 
                    onChange={this.onChange} 
                    value={this.state.nombre} 
                    required  
                    name="nombre"
                  />
              </div>
              <div>
                <label>Cupo: </label>
                <input 
                    type="text" 
                    onChange={this.onChange} 
                    value={this.state.cupo} 
                    required  
                    name="cupo"
                />
              </div>
              <div>
                <label>Buscar: </label>
                <input type="text" placeholder="Buscar"/>
              </div>
              <div>
                <label>Docente: </label>
                <select onChange={this.onChange} 
                        value={this.state.docente} 
                        required  
                        name="docente">
                  <option value="">.: Selected :.</option>
                  {docentes}
                </select>
              </div>
            </div>
            <div className="Asignatura-content-table">
              <div className="search">
                <input type="text" placeholder="Buscar.."/>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Codigo</th>
                    <th>Sel</th>
                  </tr>
                </thead>
                <tbody>
                    { estudiantes }
                </tbody>
              </table>
            </div>
            <div className="Asignatura-content-save">
              <input type="submit" value="Guardar"/>
            </div>
          </section>
          </form>
        </section>
    );
  }
}

export default Asignatura;