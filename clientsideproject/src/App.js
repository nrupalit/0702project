import React, { Component } from 'react';
// import Login from './Components/LoginPage';
import './App.css';
import Posts from './Components/reduxFolder/Posts';
import { Provider } from 'react-redux';
import store from './store';
import Postform from './Components/reduxFolder/Postform';


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        {/* <div>
            <h1>Login Page redirect</h1>
            <Login />
        </div> */}
        <div>Hello world</div>
        <Postform />
        <hr />
        <Posts />
        

        
      </Provider>
    )
  }
}

export default App;
