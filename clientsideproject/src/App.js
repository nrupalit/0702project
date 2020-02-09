import React, { Component } from 'react';
import Login from './Components/LoginPage';
import './App.css';

class App extends Component {
  render () {
    return (
        <div>
            <h1>Login Page redirect</h1>
            <Login />
        </div>
    )
  }
}

export default App;
