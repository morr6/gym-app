import { FC } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from '../homepage/Homepage';
import ExercisesList from '../exercises/list/List';

export const MainRouter: FC = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />

            <Route path="/exercises" component={ExercisesList} />
        </Switch>
    </Router>
);

export default MainRouter;
