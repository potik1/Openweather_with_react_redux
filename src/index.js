import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import About from './components/About';
import Examples from './components/Examples';
import Weather from './components/Weather';
import Nav from './components/Nav';

// const store = applyMiddleware(promise)(createStore);

const initialState = {};

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(promise),

        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Nav/>
          <Switch>
            <Route path="/" component={Weather} exact={true} strict={true} />
            <Route path="/about" component={About}/>
            <Route path="/examples" component={Examples}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));
