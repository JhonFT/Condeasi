import React, { Component } from 'react';
import Header from '../header/Header.jsx';
import style from './Abrir.css';


class Abrir extends Component {
constructor(props) {
    super(props);
    this.state = {
      asignaturas: [],
      docentes: [],
      cdlista:"",
      estado: true,
    };

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeAsignatura = this.onChangeAsignatura.bind(this);
  }

  handleClick(e){
    if(this.state.estado){
      fetch('http://localhost:1111/apertura/', {
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({cdlista: this.state.cdlista})
          })
        .then((response) => {
          return response.json()
        })
        .then((usuario) => {
          this.state.estado = false;
                    
        })
    }else{
      fetch('http://localhost:1111/apertura/', {
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
              method: "PUT",
              body: JSON.stringify({cdlista: this.state.cdlista})
          })
        .then((response) => {
          return response.json()
        })
        .then((usuario) => {
          this.state.estado = true;
        })
    }
    e.preventDefault();
  }

  onChange(e) {

      fetch('http://localhost:1111/asignatura/'+e.target.value)
      .then((response) => {
        return response.json()
      })
      .then((asignaturas) => {
        this.setState({ asignaturas: asignaturas })
      });
  }

  onChangeAsignatura(e) {
      var event = e.target;
      fetch('http://localhost:1111/apertura/'+ event.value)
      .then((response) => {
        return response.text();
      })
      .then((estado) => {
  
        this.setState({
          cdlista: event.value,
          estado: estado == 'false' ? false : true, 
        })
      });
  }

  componentWillMount() {  
     fetch('http://localhost:1111/docente')
      .then((response) => {
        return response.json()
      })
      .then((docentes) => {
        this.setState({ docentes: docentes })
    });
  }

 render() {
    var json = this.state.docentes;
    var docentes = json.map((d) =>
      <option key={d.toString()} value={d.cddocente}>{d.dsnombre +" "+ d.dsapellido}</option>
    );
    var jsonAsig = this.state.asignaturas;
    var asignaturas = jsonAsig.map((d) =>
      <option key={d.cdlista} value={d.cdlista}>{d.dsnombre}</option>
    );
    var estado = this.state.estado  ? "Abrir"  :  "Cerrar";
    return (
        <section name="Abrir" className="Abrir">
          <h1>Gestionar Asignatura</h1>
          <div className="Abrir-content">
            <form  onSubmit={this.handleClick}>
            <div>
              <label> Docente </label>
                <select 
                  onChange={this.onChange}
                  required
                >
                  <option value="">.:Seleccione:.</option>
                  {docentes}
                </select>
            </div>
              <div>
                <label>Asignatura</label>
                <select 
                  onChange={this.onChangeAsignatura}
                  required
                >
                  <option value="">.:Seleccione:.</option>
                  {asignaturas}
                </select>
              </div>
              <input type="submit" value={estado}/>
            </form>
          </div>
        </section>
    );
  }
}



export default Abrir;