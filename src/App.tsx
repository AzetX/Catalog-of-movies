import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FilmsPage } from './page/FilmsPage';
import InfoMoviePage  from './page/InfoMoviePage';

const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <Navbar />
    <div className="container">
      <Switch>
        <Route component={FilmsPage} path="/Catalog-of-movies" exact />
        <Route component={InfoMoviePage} path="/fullInfo" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
