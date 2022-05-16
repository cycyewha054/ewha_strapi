import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Router } from './pages/Router';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Router} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
