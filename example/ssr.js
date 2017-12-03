import fs from 'fs';
import path from 'path';

import Example from './example.component';
import React from 'react';
import ReactDOM from 'react-dom/server';

import { setBreakpoints } from '../lib';

setBreakpoints(['desk']);

const content = `
<html>
  <head>
    <title>Flexr Example</title>
    <link rel="stylesheet" href="/normalize.css">
  </head>
  <body>
    <div id="root">${ReactDOM.renderToString(<Example />)}</div>
  </body>
  <script>window.__flexr = ['desk'];</script>
  <script src="/bundle.js"></script>
</html>
`;

fs.writeFile(path.resolve(__dirname, 'ssr.html'), content, 'utf-8', err => {
  if (err) {
    console.error(err);
  }
});
