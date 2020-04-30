import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

import './css/bootstrap.min.css';
import './css/style.css';

const Root = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={App} />
            </div>
        </Router>
    )
}

render(<Root />, document.querySelector('#root'));
registerServiceWorker();

