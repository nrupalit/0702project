import React, { Component } from 'react';
import {  Switch , Link , BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Index from './Index';
import NotFoundPage from './NotFoundPage';
import AntDTry from './AntDTry';

class RoutePages extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component = { App }/>
                    <Route exact path="/" component = { Index }/>
                    <Route path="/try" component = { AntDTry }/>
                    <Route component={NotFoundPage} />
                </Switch>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </Router>
        )
    }
}


export default RoutePages