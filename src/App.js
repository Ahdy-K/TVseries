import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import Main from './components/Main/routes';
import BrowserRouter from 'react-router-dom/BrowserRouter';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TV series </h1>
        </header>
        <h1>  you're in the right place  </h1>
     
      
       <Main /> 
      </div>
    );
  }
}

export default App;
