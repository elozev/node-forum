import React, { Component } from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Story from './components/Story';
import Profile from './components/Profile';
import Error from './components/Error';
import Category from './components/Category';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/story" component={Story}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/category" component={Category}/>
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/story" component={Story}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
