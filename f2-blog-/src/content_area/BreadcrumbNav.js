import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const BreadcrumbNav = (props) =>
	<div>
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb">
				{props.links.map((link, index) => <li className="breadcrumb-item" key={index}><NavLink to={link.to}>{link.name}</NavLink></li>)}
			</ol>
		</nav>
	</div>


BreadcrumbNav.propTypes = {
	links: PropTypes.array.isRequired,
}

export default BreadcrumbNav;