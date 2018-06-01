import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div>
				<div className='container' id='banner'>
					<div className='container' id='banner-overlay'>
					</div>
				</div>

				<section id='benefits'>
					<h2>The benefits of Trunk Club</h2>
						<div className='brands'>asd</div>
						<div className='stylist'>asd</div>
						<div className='wardrobes'>asd</div>
						<div className='schedule'>asd</div>
				</section>

				<section id='shop'>
					<h2>Three ways to shop</h2>
						<div className='order'>asd</div>
						<div className='clubhouse'>asd</div>
						<div className='custom'>asd</div>						
				</section>

				<footer>
					<div id='services'>asd</div>
					<div id='about'>asd</div>
					<div id='partners'>asd</div>
					<div id='icons'>asd</div>
				</footer>
			</div>
		);
	}
}

export default Home;