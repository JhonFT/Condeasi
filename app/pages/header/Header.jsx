import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

function Header(){
	return(
		<header className="Header">
			<h1 className="Header-title">Conde<span>asi</span></h1>	
			<figure className="Header-menu"> 
				<img src="../img/Menu.png" alt="" />
			</figure>
			<nav className="Header-nav">
			  <ul>  
		        <li><Link to="/">Login</Link></li>
		        <li><Link to="/home">Home</Link></li>
		        <li><Link to="/">Crear docente</Link></li>
		        <li><Link to="/home">Crear estudiante</Link></li>
		        <li><Link to="/">Crear asignatura</Link></li>
		        <li><Link to="/home">Modificar</Link></li>
		        <li><Link to="/home">Abrir materia</Link></li>
		      </ul>
		      	<figure className="Header-nav-close"> 
					<img src="../img/cross-flat.png" alt="" />
				</figure>
      		</nav>
		</header>
	)
}


export default Header;
