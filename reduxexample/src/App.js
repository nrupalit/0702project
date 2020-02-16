import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './container/Posts';
import PostForm from './container/PostForm';
import { Provider } from 'react-redux';
import { store } from './store';
import ReactAnime from './animeImage/container/ReactAnime';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App">
          <ReactAnime />
          <img src={logo} className="App-logo" alt="logo" style = {{width:'100px',height:'auto', margin:0, float:"left"}} />
        </header>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
