import React, { Component } from 'react';
import './Nav.css';

import Bars from '../Bars';

const Nav = () => (
		<div>
			<div className="Navbar">
			   <div className="Navbar__Link Navbar__Link-brand">
			      Trunk Club 2
			    </div>
			    <div className="Navbar__Link Navbar__Link-toggle">
			      <i className="fas fa-bars"><Bars /></i>
			    </div>
			  <nav className="Navbar__Items">
			    <div className="Navbar__Link">
			      Longer Link
			    </div>
			    <div className="Navbar__Link">
			      Longer Link
			    </div>
			    <div className="Navbar__Link">
			      Link
			    </div>
			  </nav>
			  <nav className="Navbar__Items Navbar__Items--right">
			    <div className="Navbar__Link">
			      Link
			    </div>
			    <div className="Navbar__Link">
			      Link
			    </div>
			  </nav>
			</div>
		</div>
	)

export default Nav;