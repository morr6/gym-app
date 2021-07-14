import { FC } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from '../homepage/Homepage';

export const MainRouter: FC = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
    </Router>
);

export default MainRouter;
