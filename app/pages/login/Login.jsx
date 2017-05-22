import React, { Component } from 'react';
import style from './Login.css';


class Login extends Component {


   constructor(props) {
    super(props);
    this.state = {user: '',pass:'', error: ''};
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
   }

   handleClick(e) {
        
        fetch('http://localhost:1111/', {
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
        
        if(usuario){
            localStorage.setItem("user", JSON.stringify(usuario));

        }else{
            console.log(usuario);
            this.setState({error : "Usuario o clave incorrectos"});
        }
        
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
            <section name="Login" className="Login">
                <section className="Login-content">
                    <section className="Login-content-title">
                        <h1 className="Login-content-title-text">Conde<span>asi</span></h1> 
                    </section>
                    <form className="Login-content-form"  onSubmit={this.handleClick} >
                       <fieldset>
                                <h2>Bienvedido</h2>
                                <input 
                                    type="text" 
                                    value={this.state.user}  
                                    placeholder="User.." 
                                    name="user" 
                                    onChange={this.onChange}
                                    required
                                />
                                <input 
                                    type="password" 
                                    value={this.state.pass}  
                                    placeholder="Pass.." 
                                    name="pass" 
                                    onChange={this.onChange} 
                                    required
                                />
                                <input 
                                    type="submit" 
                                    value="Ingresar" 
                                     
                                />
                                <a href="#">¿Olvidaste tu contraseña?</a>
                                <span className="error">{this.state.error}</span>
                                <span className="dir"></span>
                       </fieldset>
                     </form>
                </section>
            </section>
        );
    }
}

export default Login;