import React, { Component } from 'react';
// import Login from './Components/LoginPage';
import './App.css';
import {Provider} from 'react-redux';
import store from './Components/reduxFolder/store';


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        {/* <div>
            <h1>Login Page redirect</h1>
            <Login />
        </div> */}
      </Provider>
    )
  }
}

export default App;
