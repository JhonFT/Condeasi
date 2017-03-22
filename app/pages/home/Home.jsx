import React, { Component } from 'react';
import style from './home.css';


class Home extends Component {
 render() {
    return (
        <section name="Home" className="Login">
            <from className="Login-form">
    	       <fieldset>
            		<div>
            			<label>Usuario</label>
            			<input type="text"/>
            		</div>
            		<div>
            			<label>Clave</label>
            			<input type="password"/>
            		</div>
            		<div>
            			<input type="submit" value="Ingresar" />
            		</div>
        	   </fieldset>
             </from>
        </section>
    );
  }
}

export default Home;