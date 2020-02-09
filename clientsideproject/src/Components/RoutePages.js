import React, { Component } from 'react';
import {  Switch , Link , BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';
import Index from './Index';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';

class RoutePages extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route name="apppage" path="/apppage" component = { Index }/>
                    <Route name="login" path="/login" component = { LoginPage }/>
                    <Route exact path="/" render={() => (
                        <Redirect to="/login"/>
                    )}/>
                    <Route component={NotFoundPage} />
                </Switch>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </Router>
        )
    }
}


export default RoutePages