import React from 'react';
import {BrowserRouter, Router, Route, Link} from 'react-router-dom';
// import App from '../App.js';
// import Story from '../story_page/Story';


const Routes = () =>
	<div>
		<BrowserRouter>
		     <div>
		       <ul>
		         	<li>
		           		<Link to="/">Home</Link>
		        	</li>
		        	<li>
		        		<Link to="/story">Story</Link>
		        	</li>
		       	</ul>

		    	<Route exact path="/" component={Home} />
		     	<Route path="/story" component={Story} />
		     </div>
	    </BrowserRouter>
	</div>


export default Routes;