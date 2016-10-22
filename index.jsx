import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'current-input';

import App from './src/components/App';
import resume from './src/components/home/resume';
import portfolio from './src/components/home/portfolio';
import certificates from './src/components/home/certificates';
import blog from './src/components/home/blog';
import contact from './src/components/home/contact';
import error from './src/components/error/error';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={resume}/>
        <Route path="portfolio" component={portfolio}></Route>
        <Route path="certificates" component={certificates}></Route>
        <Route path="blog" component={blog}></Route>
        <Route path="contact" component={contact}></Route>
        <Route path="*" component={error}/>
    </Route>
);

render(
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app'));
