import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'current-input';

import App from './src/components/App';
import Home from './src/components/Home';
import PageNotFound from './src/components/PageNotFound';
import ExampleComponent from './src/components/ExampleComponent';
import ExampleTwoDeepComponent from './src/components/ExampleTwoDeepComponent';

const routes = (
    <Route path="/" mapMenuTitle="Home" component={App}>
        <IndexRoute component={Home}/>

        <Route path="example" mapMenuTitle="Example" component={ExampleComponent}>
            <Route path="two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent}/>
        </Route>

        <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound}/>
    </Route>
);

render(
    <Router history={browserHistory} routes={routes}/>, document.getElementById('app-container'));
