import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Layout } from './components/layout/layout';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Layout />, document.getElementById('root'));

serviceWorker.unregister();