import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Levels from './pages/Levels';

export default function Routes() {
  return (
    <Switch>
      <Route path="/levels" component={Levels} />
    </Switch>
  );
}
