import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CategoriesDropdown = props =>
	<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
		{props.categories
			.map((category, index) => <div key={index}> <NavLink className="dropdown-item" to={category.link}> {category.name}</NavLink></div>)}
	</div>

CategoriesDropdown.propTypes = {
	categories: PropTypes.array.isRequired,
}

export default CategoriesDropdown;