import React from "react";
import {Router, Route, Redirect, hashHistory } from 'react-router'

import SiglasTipos from '../componentes/consultas/referencias/siglasTipos/siglasTipos'
import Analises from '../componentes/analises/analises'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={SiglasTipos}/>
        <Route path='/siglasTipos' component={SiglasTipos}/>
        <Route path='/analises' component={Analises}/>
        <Redirect path='*' to="/"/>
    </Router>
)
