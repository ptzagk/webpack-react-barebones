/* @flow */

import React from 'react';
import { render } from 'react-dom';
import '../style/materialize.css';
import '../style/react-range.css';
import '../style/style.css';

/*
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Routes from './router';
import '../style/materialize.css';
import '../style/react-range.css';
import '../style/style.css';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
*/
const App = () => (<div>Welcome to Express React</div>);

render(<App />, document.getElementById('app'));
