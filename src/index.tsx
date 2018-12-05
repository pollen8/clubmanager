import './index.css';

import Parse from 'parse';
import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

Parse.initialize('bzrI10hnPZKZhlVRJZTS1xtzcPVNVLM4iZLhsyMf', 'ayXeSDaLRor3kflz2i5Dmqvk7ztpBQ3pNM53Qjyq');
Parse.serverURL = 'https://parseapi.back4app.com/'

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
