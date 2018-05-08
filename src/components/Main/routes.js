import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Series from '../../container/series/Series';

const Main = props =>(
    <BrowserRouter>
    <Switch> 
     
        <Route exact path="/" component={Series} />
     
    </Switch>
 </BrowserRouter>
);
export default Main ;