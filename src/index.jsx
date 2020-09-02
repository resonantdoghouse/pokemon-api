import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import App from './App';
import About from './components/About';
import NotFound from './components/NotFound';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Header />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/pokemon" component={App} exact />
        <Route path="/pokemon/:name" component={App} />
        <Route path="/about" component={About} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
