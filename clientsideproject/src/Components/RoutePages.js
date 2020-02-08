import React, { Component } from 'react';
import {  Switch , Link , BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Index from './Index';

class RoutePages extends Component {
    render () {
        return (
            <Router>
                {/* <ul>
                    <li>
                        <Link to="/a">axios</Link>
                    </li>
                </ul> */}
                <Switch>
                    <Route path="/login" component = { App }/>
                    <Route exact path="/home" component = { Index }/>
                </Switch>
            </Router>
        )
    }
}


export default RoutePages