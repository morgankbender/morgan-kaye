// External imports
import React from 'react';
import ReactDOM from 'react-dom';
// Local imports
import App from './components/App';
// Style imports
import './reset.css';

// This file is the entry point for Webpack.
// Grab App and plug in to root div from index.html
ReactDOM.render(<App />, document.getElementById('root'));
