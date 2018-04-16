import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


const routes = [
  {
    "component": require('../../../../../../Program Files/nodejs/node_global/node_modules/umi/node_modules/umi-build-dev/lib/DefaultLayout.js').default,
    "routes": []
  }
];

export default function() {
  return (
<Router history={window.g_history}>
  { renderRoutes(routes) }
</Router>
  );
}
