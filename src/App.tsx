import React from 'react';
import { Navbar } from './components/Navbar'
import { FilmsPage } from './page/FilmsPage'
import InfoMoviePage  from './page/InfoMoviePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App: React.FunctionComponent = () => {



  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
           <Route component={FilmsPage} path="/Catalog-of-movies" exact/>
           <Route component={InfoMoviePage} path="/fullInfo" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

