import React, { Component } from 'react';
import {  Switch , BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';
import App from '../App';
import ReactAnime from '../animeImage/container/ReactAnime';
import NotFoundPage from './NotFoundPage'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route name="home" path="/home" component = { App }/>
                    <Route name="image" path="/image" component = { ReactAnime }/>
                    <Route exact path="/" render={() => (
                        <Redirect to="/home"/>
                    )}/>
                    <Route component={ NotFoundPage } />
                </Switch>
            </Router>
        )
    }
}
