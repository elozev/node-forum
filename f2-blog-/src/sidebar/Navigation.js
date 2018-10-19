import React from 'react';
import PropTypes from 'prop-types';
import CategoriesDropdown from './CategoriesDropdown';
import { NavLink} from 'react-router-dom';

const Navigation = props =>
	<nav className="navbar navbar-expand-lg navbar-dark flex-column">
		<button className="navbar-toggler mb-2" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>

		<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		  <div className="navbar-nav flex-column text-left text-white">
		    <NavLink className="nav-item nav-link active" to="/"> Home </NavLink> <span className="sr-only">(current)</span>
		    {/* <a className="nav-item nav-link" href="#">Categories</a> */}
		    <li className="nav-item dropdown">
		      <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		        Categories
		      </a>
		      <CategoriesDropdown
		      	categories={props.categories}/>
		    </li>
		    <NavLink className="nav-item nav-link" to="/category">Category</NavLink>
		    <NavLink className="nav-item nav-link" to="#">Feeling lucky</NavLink>
		    <NavLink className="nav-item nav-link" to="/profile">Profile</NavLink>
		  </div>
		</div>
	</nav>

Navigation.propTypes = {
	categories: PropTypes.array.isRequired,
}

export default Navigation;