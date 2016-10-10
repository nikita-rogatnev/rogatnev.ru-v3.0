import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'current-input';

import App from './src/components/App';
import home__page from './src/components/home__page';
import error__page from './src/components/error__page';
import pay__page from './src/components/pay__page';

const routes = (
    <Route path="/" mapMenuTitle="Home" component={App}>
        <IndexRoute component={home__page}/>

        <Route path="pay" mapMenuTitle="Example" component={pay__page}></Route>
        <Route path="*" mapMenuTitle="Page Not Found" component={error__page}/>
    </Route>
);

render(
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app-container'));
