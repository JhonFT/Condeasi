import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

function Header(){
	return(
		<header className="Header">
			<h1 className="Header-title">Conde<span>asi</span></h1>	
			<nav className="Header-nav">
			  <ul>  
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/about">About</Link></li>
		      </ul>
      		</nav>
		</header>
	)
}

export default Header;
