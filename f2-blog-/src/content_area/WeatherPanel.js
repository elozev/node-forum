import React from 'react';

const WeatherPanel = props =>
	<div className="card mb-5">
		<img className="card-img-top img-fluid" src={require('./../images/sunny_weather.jpg')} alt=""/>
		<div className="card-body">
			<h4 className="card-title">The forecast today:</h4>
			<p className="card-text">It's currently 25 degrees in Sofia, Bulgaria.</p>
			<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
		</div>
	</div>


WeatherPanel.propTypes = {}

export default WeatherPanel;