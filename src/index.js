import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'

import Nav from './components/Nav'
import App from './components/App'
import Inbox from './components/Inbox'
import About from './components/About'
import Error from './components/Error'
  
ReactDOM.render(
    <Router>
        <Nav />
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Inbox" component={Inbox} />
            <Route path="/About" component={About} />
            <Redirect from="/redirect" to="/Inbox" />
            <Route component={Error} />
        </Switch>
    </Router>,
    document.getElementById('app')
);