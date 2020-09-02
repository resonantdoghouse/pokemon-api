import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import App from './App';
import About from './components/About';
import NotFound from './components/NotFound';
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Header />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/pokemon" component={App} exact />
        <Route path="/pokemon/:name" component={App} />
        <Route path="/about" component={About} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
