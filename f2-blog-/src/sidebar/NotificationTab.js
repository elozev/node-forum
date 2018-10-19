import React from 'react';
import PropTypes from 'prop-types';

const NotificationTab = props =>
	<div className="text-center">
		<a className="btn btn-dark text-white mb-2">
		      Notifications <span className="badge badge-light">{props.notificationCount}</span>
	    </a>
    </div>

NotificationTab.propTypes = {
	notificationCount: PropTypes.number,
}

export default NotificationTab;