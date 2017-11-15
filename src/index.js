/* eslint-disable indent */
import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  Router,
  Route, Switch, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import store from './stores/store';
import MetaTags from 'react-meta-tags';

import muiTheme from './utils/muiTheme';
import { getMuiTheme } from 'material-ui/styles/index';
import { HomeLayout } from './components/layout/homeLayout/HomeLayout';
import Home from './pages/home/Home';
import Advertisements from './pages/advertisements/Advertisements';
import 'normalize.css';
import './index.css';

injectTapEventPlugin();

export const history = createBrowserHistory();
render(
  <div>
    <MetaTags>
      <meta name='mobile-web-app-capable' content='yes'/>
    </MetaTags>
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <HomeLayout exact path='/' component={Home}/>
            <Route exact path='/adv' component={Advertisements} />
            <Redirect to={'/404'} />
          </Switch>
        </Router>
      </Provider>
    </MuiThemeProvider>
  </div>, document.getElementById('root')
);

registerServiceWorker();