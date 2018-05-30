import React, { Component } from 'react';
import './Nav.css';

const Nav = () => (
		<div>
			<nav className='navbar'>
				<div className="dropdown">
					<button className="dropbtn">WOMEN'S
						<i className="fa fa-caret-down"></i>
					</button>

					<div className="dropdown-content">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div> 

				<div className="dropdown">
					<button className="dropbtn">MEN'S
						<i className="fa fa-caret-down"></i>
					</button>

					<div className="dropdown-content">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div>

				<a href="/">BLOG</a> 
			</nav>
		</div>
	)

export default Nav;