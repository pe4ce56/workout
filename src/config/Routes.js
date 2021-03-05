import * as React from 'react';


import HomeScreen from '../screen/HomeScreen';
import WorkoutsScreen from '../screen/WorkoutsScreen';
import ExercisingScreen from '../screen/ExercisingScreen';
import RestScreen from '../screen/RestScreen';
import EndExercisingScreen from '../screen/EndExercisingScreen';


const Routes = [
    {
        name: 'Home',
        component: HomeScreen
    },
    {
        name: 'Workouts',
        component: WorkoutsScreen
    },
    {
        name: 'Exercising',
        component: ExercisingScreen
    },
    {
        name: 'Rest',
        component: RestScreen
    },
    {
        name: 'End',
        component: EndExercisingScreen
    }
]





export default Routes;
