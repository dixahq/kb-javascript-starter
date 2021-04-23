import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '@elevio/kb-kit/lib/App';
import config from './config';
import './css/main.css';
const target = document.getElementById('kb-target');
if (!target) throw new Error('Cant find target div');
ReactDOM.render(<App config={config} />, target);
