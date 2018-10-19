import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SearchForm = props =>
	<form onSubmit={props.handleSearchEvent}>
		<div className="input-group m-2">
		  <input
		  	type="text"
		  	className="form-control"
		  	placeholder="Search..."
		  	aria-label="Search"
		  	aria-describedby="button-addon2"
		  	value={props.getPendingSearchText}
		  	onChange={props.handleSearchInput}/>

		  <div className="input-group-append">
		    <button className="btn btn-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon="search"/></button>
		  </div>
		</div>
	</form>

SearchForm.propTypes = {
	handleSearchEvent: PropTypes.func.isRequired,
	handleSearchInput: PropTypes.func.isRequired,
	getPendingSearchText: PropTypes.string.isRequired,
}

export default SearchForm;