import React, { Component } from 'react';
import {  Switch , Link , BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';
import Index from './Index';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import Posts from './reduxFolder/Posts';
import Postform from './reduxFolder/Postform';
import LessonTwo from './reactDocs/lessonTwo';

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
                    <Route name="post" path="/post" component={ Posts } />
                    <Route name="postform" path="/postform" component={ Postform } />
                    <Route name="react" path="/react" component={ LessonTwo } />
                    <Route component={ NotFoundPage } />
                </Switch>
                <ul>
                    <li>
                        <Link to="/login">
                            Login
                            {/* <button onClick = {this.props.getData} >Get data</button> */}
                        </Link>
                    </li>
                </ul>
            </Router>
        )
    }
}


export default RoutePages