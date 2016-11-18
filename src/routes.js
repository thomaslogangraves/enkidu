import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Application from './components/App';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Application}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
