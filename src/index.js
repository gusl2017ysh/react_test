import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';

import App, { App2, App3 } from './App';
import Moive_list from './movieList';
import Movie from './Movie';



ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Moive_list />, document.getElementById('main'));

ReactDOM.render(<Movie />, document.getElementById('Movie'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
