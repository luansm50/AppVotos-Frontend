import React from "react";
import {Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import NewAnalysis from '../newAnalysis/newAnalysis';
import NewUser from '../newUser/newUser'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/newAnalysis' component={NewAnalysis}/>
        <Route path='/newUser' component={NewUser}/>
        <Redirect path='*' to="/"/>
    </Router>
)
