import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Levels from './pages/Levels';
import Courses from './pages/Courses';
import Details from './pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/levels" component={Levels} />
      <Route exact path="/courses/:level" component={Courses} />
      <Route exact path="/courses/:level/:course" component={Details} />
    </Switch>
  );
}
