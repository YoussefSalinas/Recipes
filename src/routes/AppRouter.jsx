import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from '../components/Layout/Layout';
import { HomeView } from '../views/HomeView';
import { CategoriaView } from '../views/CategoriaView';

export function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            exact
            path="/"
            component={ HomeView }
          />
          <Route
            exact
            path="/categoria/:categoriaRecetas"
            component={ CategoriaView }
          />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  )
}
