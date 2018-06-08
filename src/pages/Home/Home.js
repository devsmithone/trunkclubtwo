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
						<div className='benefitDivs' id='brands'>brands</div>
						<div className='benefitDivs' id='stylist'>stylist</div>
						<div className='benefitDivs' id='wardrobes'>wardrobes</div>
						<div className='benefitDivs' id='schedule'>schedule</div>
				</section>

				<section id='shop'>
					<h2>Three ways to shop</h2>
						<div className='shopDivs' id='order'>asd</div>
						<div className='shopDivs' id='clubhouse'>asd</div>
						<div className='shopDivs' id='custom'>asd</div>						
				</section>

				<footer>
					<div className='footerDivs' id='services'>
						<p>Services</p>
					</div>

					<div className='footerDivs' id='about'>
						<p>About us</p>
					</div>

					<div className='footerDivs' id='partners'>
						<p>Partner with us</p>
					</div>

					<div className='footerDivs' id='questions'>
						<p>Have a question?</p>
					</div>

					<div className='footerDivs' id='icons'>
						<p>Icons go here</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default Home;