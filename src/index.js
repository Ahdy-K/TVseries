import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import {BrowserRouter as Router}  from 'react-router-dom'  ;
//import {Router} from 'react-router';
import  Main from './components/Main/routes';
ReactDOM.render( 
    (<Main>
     <App /> </Main> ), 
    document.getElementById('root'));
registerServiceWorker();
