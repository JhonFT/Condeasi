import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import style from './Asistencia.css';


class Asistencia extends Component {
constructor(props) {
    super(props);
    this.state = {
      asignaturas: [],
      cdlista:"",
      numdoc : "",
      codigo : "",
      cdlistaEs: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleClick(e){  
    fetch('http://localhost:1111/listaestudiante/', {
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
          if(usuario.length > 0){
            fetch('http://localhost:1111/asistencia/', {
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
                cdlista_estudiante: usuario[0].cdlista_estudiante, 
                cdapertura: this.state.cdapertura,
              })
            })
            .then((response) => {
            return response.json()
            })
            .then((usuario) => {
                    
            });
        }else{
          console.log("El estudiante no esta registrado");
        }
    })
    
    e.preventDefault();
  }

  onChange(e) {
      var state = {};
      state[e.target.name] =  e.target.value;
      this.setState(state);
  }

  componentWillMount() {  
     fetch('http://localhost:1111/abiertas')
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response);
        this.setState({ asignaturas: response })
    });
  }

 render() {
    var jsonAsig = this.state.asignaturas;
    var asignaturas = jsonAsig.map((d) =>
      <option key={d.cdapertura} value={d.cdapertura}>{d.dsnombre}</option>
    );
    return (
        <section name="Asistencia" className="Asistencia">
          <h1>Gestionar Asignatura</h1>
          <div className="Asistencia-content">
            <form  onSubmit={this.handleClick}>
              <div>
                <div>
                  <label> Asignatura </label>
                    <select 
                    onChange={this.onChange}
                    required
                    name="cdapertura"
                    >
                    <option value="">.:Seleccione:.</option>
                    {asignaturas}
                  </select>
                </div>
                <div>
                  <label>Cedula</label>
                  <input 
                    type="text"
                    onChange={this.onChange}
                    required 
                    name="numdoc"/>
                </div>
                <div>
                  <label>Codigo</label>
                  <input 
                    type="text" 
                    required 
                    name="codigo"
                    onChange={this.onChange}
                  />
                </div>
              <input type="submit"  value="Guardar"/>
              </div>
            </form>
          </div>
        </section>
    );
  }
}



export default Asistencia;