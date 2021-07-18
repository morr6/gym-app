import { FC } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from '../homepage/Homepage';
import Exercises from '../exercises/Exercises';

export const MainRouter: FC = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />

            <Route path="/exercises" component={Exercises} />
        </Switch>
    </Router>
);

export default MainRouter;
