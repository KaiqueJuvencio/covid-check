import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import SymptomsCheck from './pages/Symptom';
import Prevention from './pages/Prevention';
import Treatments from './pages/Treatments';
import SevereSymptom from './pages/CheckResultSevereSymptom';
import ComumSymptom from './pages/CheckResultComumSymptom';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/symptoms" component={SymptomsCheck}/>
                <Route path="/treatments" component={Treatments}/>
                <Route path="/prevention" component={Prevention}/>
                <Route path="/checkresult/severe" component={SevereSymptom}/>
                <Route path="/checkresult/comum" component={ComumSymptom}/>
            </Switch>
        </BrowserRouter>
    )
}