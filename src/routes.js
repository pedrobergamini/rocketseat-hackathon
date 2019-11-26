import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import CourseDetails from './pages/CourseDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Route path="/CourseDetails" component={CourseDetails} />
    </Switch>
  );
}
