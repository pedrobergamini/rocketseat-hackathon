import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Levels from './pages/Levels';
import Courses from './pages/Courses';
import Details from './pages/Details';
import Ranking from './pages/Ranking';
import Activity from './pages/Activity';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Ranking} />
      <Route path="/levels" component={Levels} />
      <Route exact path="/courses/:level" component={Courses} />
      <Route exact path="/courses/:level/:course" component={Details} />
      <Route
        exact
        path="/courses/:level/:course/:activity"
        component={Activity}
      />
    </Switch>
  );
}
