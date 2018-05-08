import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import Series from '../../container/series/Series';

const Main = props =>(
    <Router>
    <Switch> 
     
        <Route exact path="/" component={Series} />
     
    </Switch>
 </Router>
);
export default Main ;