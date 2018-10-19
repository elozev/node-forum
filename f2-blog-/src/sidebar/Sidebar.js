import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import NotificationTab from './NotificationTab';
import Title from './Title';

const Sidebar = props =>
  <div className="col-lg-3 col-xl-2 bg-success">

	<SearchForm
    	handleSearchEvent={props.handleSearchEvent}
    	handleSearchInput={props.handleSearchInput}
    	getPendingSearchText={props.getPendingSearchText}/>

    <div className="container">
    	<Title title={props.siteTitle}/>

		<Navigation
			categories={props.categories}/>

		<NotificationTab notificationCount={props.notificationCount} />

    </div>
  </div>

Sidebar.propTypes = {
	siteTitle: PropTypes.string.isRequired,
	handleSearchEvent: PropTypes.func.isRequired,
	handleSearchInput: PropTypes.func.isRequired,
	getPendingSearchText: PropTypes.string.isRequired,
	notificationCount: PropTypes.number,
	categories: PropTypes.array.isRequired,
}

export default Sidebar;