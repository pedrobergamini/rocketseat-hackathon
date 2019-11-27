import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

import history from './services/history';

import Header from '~/components/Header';

export default function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}
