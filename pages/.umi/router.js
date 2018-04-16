import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


const routes = [
  {
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/index.html",
        "exact": true,
        "component": () => React.createElement(require('D:/Program Files/nodejs/node_global/node_modules/umi/node_modules/umi-build-dev/lib/Compiling.js').default, { route: '/index.html' })
      },
      {
        "path": "/list",
        "exact": true,
        "component": require('../list.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.js').default
      }
    ]
  }
];

export default function() {
  return (
<Router history={window.g_history}>
  { renderRoutes(routes) }
</Router>
  );
}
