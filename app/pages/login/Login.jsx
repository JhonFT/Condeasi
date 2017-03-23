import React, { Component } from 'react';
import style from './Login.css';


class Login extends Component {
 render() {
    return (
        <section name="Login" className="Login">
            <section className="Login-content">
                <section className="Login-content-title">
                    <h1 className="Login-content-title-text">Conde<span>asi</span></h1> 
                </section>
                <from className="Login-content-form">
                   <fieldset>
                            <h2>Bienvedido</h2>
                            <input type="text" placeholder="Usuer" />
                            <input type="password" placeholder="Pass"/>
                            <input type="submit" value="Ingresar" />
                            <a href="#">¿Olvidaste tu contraseña?</a>
                            <span className="dir"></span>
                   </fieldset>
                 </from>
            </section>
        </section>
    );
  }
}

export default Login;