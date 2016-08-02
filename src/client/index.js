import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/app'
import { loadFruits } from './actions';

ReactDom.render(<App />, document.getElementById('app'));
