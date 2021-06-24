import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ContatoPage from './pages/ContatoPage';
import SobrePage from './pages/SobrePage';
import VeiculosPage from './pages/VeiculosPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/sobre" component={SobrePage} exact />
        <Route path="/veiculos" component={VeiculosPage} exact />
        <Route path="/contato" component={ContatoPage} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
