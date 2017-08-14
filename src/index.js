import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Registration from './Registration';
import registerServiceWorker from './registerServiceWorker';
import { Link } from 'react-router-dom';

ReactDOM.render(<Registration />, document.getElementById('root'));
registerServiceWorker();
