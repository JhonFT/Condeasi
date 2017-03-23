import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

function Header(){
	return(
		<header className="Header">
			<h1 className="Header-title">Conde<span>asi</span></h1>	
			<nav className="Header-nav">
			  <ul>  
		        <li><Link to="/">Login</Link></li>
		        <li><Link to="/home">Home</Link></li>
		      </ul>
      		</nav>
		</header>
	)
}


export default Header;
