import { AppContainer } from 'react-hot-loader';
import Example from './example.component';
import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(Example);
if (module.hot)
  module.hot.accept('./example.component', () =>
    render(require('./example.component').default)
  );
