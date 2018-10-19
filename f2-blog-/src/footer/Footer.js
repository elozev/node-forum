import React from 'react';

const Footer = props =>
	<nav className="navbar navbar-expand-md navbar-dark bg-dark mr-0 fixed-bottom">
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>

		<div className="collapse navbar-collapse mr-0" id="navbarTogglerDemo01">
			<a className="navbar-brand" href="">Blogster Inc.</a>
				<ul className="navbar-nav mr-auto ml-4 mt-2 mt-lg-0">
				<li className="nav-item">
					<a className="nav-link" href="">Privacy Policy</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="">Terms & Services</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="">Become a writer</a>
				</li>
			</ul>
		</div>
	</nav>

export default Footer;