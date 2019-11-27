import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Levels from './pages/Levels';
import Courses from './pages/Courses';

export default function Routes() {
  return (
    <Switch>
      <Route path="/levels" component={Levels} />
      <Route exact path="/courses/:level" component={Courses} />
    </Switch>
  );
}
